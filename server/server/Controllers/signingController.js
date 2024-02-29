const User = require("../Models/user");
const bcrypt = require("bcrypt");
const createTokens = require("../utils/createTokens");
const { validationResult } = require("express-validator");

const signingController = {
  // controller for /v1/signIn route
  signIn: async (req, res) => {
    // check if user already signed in
    if (req.user)
      return res.status(403).send({ message: "User already logged in" });
    const { username, password } = req.body;

    // check if either username or password is missing from the request body
    if (!username || !password)
      return res
        .status(400)
        .json({ message: `Both username and password are required` });

    // query database to find user with provided credentials
    try {
      const user = await User.findOne({ username: username });
      if (!user)
        return res
          .status(400)
          .json({ message: "User not found, recheck the provided username" });

      // compare provided hash with stored hash in database
      const passMatchResult = await bcrypt.compare(
        password,
        user.password_hash,
      );
      if (!passMatchResult)
        return res.status(401).json({ message: "Invalid Password" });

      // if all processes are passed, send back a both tokens which can be used for authentication
      const { accessToken, refreshToken } = createTokens(user);

      res
        .cookie("accessToken", accessToken, {
          httpOnly: true,
          secure: false,
          maxAge: 15 * 60 * 1000, // 15 minutes
        })
        .cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: false,
          maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
        })
        .status(200)
        .json({ success: true, accessToken, refreshToken });
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  // controller for /v1/signUp route
  signUp: async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    // Create a new user
    const user = new User({
      username: req.body.username,
      password_hash: hashedPassword,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
    });

    try {
      // Save the user to the database
      const savedUser = await user.save();
      res
        .status(201)
        .json({ message: "User created successfully", user: savedUser });
    } catch (error) {
      if (error.message.includes("duplicate key error"))
        error.message = "User already exists";
      res
        .status(400)
        .json({ error: "Error creating user", message: error.message });
    }
  },
};

module.exports = signingController;
