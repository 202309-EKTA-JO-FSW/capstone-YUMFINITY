const User = require("../Models/user");
const bcrypt = require("bcrypt");
const createTokens = require("../utils/createTokens");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const passport = require("passport");

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
      const user = await User.findOne({ username: username }).lean();
      if (!user)
        return res
          .status(400)
          .json({ message: "User not found, recheck the provided username" });

      // check if user registered with google sign in, redirect to google routes if true
      if (user.password_hash === "signed with google")
        return res.redirect("/v1/google");

      // compare provided hash with stored hash in database
      const passMatchResult = await bcrypt.compare(
        password,
        user.password_hash,
      );
      if (!passMatchResult)
        return res.status(401).json({ message: "Invalid Password" });

      // if all processes are passed, send back a both tokens which can be used for authentication
      const { accessToken, refreshToken } = createTokens(user);

      delete user.password_hash;
      console.log(user);

      res
        .cookie("accessToken", accessToken, {
          httpOnly: true,
          secure: false,
        })
        .cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: false,
          maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
        })
        .status(200)
        .json({ success: true, accessToken, refreshToken, user });
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

      // Generate tokens and send them back in response
      const { accessToken, refreshToken } = createTokens(savedUser);

      res
        .cookie("accessToken", accessToken, { httpOnly: true, secure: false })
        .cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: false,
          maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        })
        .status(201)
        .json({
          message: "User created successfully",
          user: savedUser,
          tokens: { accessToken, refreshToken },
        });
    } catch (error) {
      if (error.message.includes("duplicate key error"))
        error.message = "User already exists";
      res
        .status(400)
        .json({ error: "Error creating user", message: error.message });
    }
  },

  // controller for verifying refresh token and returning access token
  refreshToken: async (req, res) => {
    // check if user has a refresh token
    const refreshToken = req.cookies["refreshToken"];
    if (!req.cookies && !refreshToken)
      return res.status(401).send("No token provided");

    // check if refresh token is valid and not expired
    let payload;
    try {
      payload = jwt.verify(refreshToken, process.env.REFRESJH_TOKEN_SECRET_KEY);
    } catch (error) {
      // if refresh token is expired, return error
      return res.status(401).json(error);
    }

    // check if user exists in database
    let user;
    try {
      user = await User.findById(payload.userId);
      if (!user)
        return res.status(401).json({ message: "User does not exist" });
    } catch (error) {
      return res.status(500).json(error);
    }

    // if user exists, proceed with generating access token
    const accessToken = jwt.sign(
      { username: user.username, userId: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "15m" },
    );
    res
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: false,
      })
      .status(201)
      .json({ successful: true, accessToken });
  },

  signWithGoogle: (req, res, next) => {
    passport.authenticate(["google"], (err, user, info) => {
      if (err) return res.status(500).json(err);
      if (Object.keys(info).length > 0) {
        if (req.query.error.includes("access_denied"))
          return res.status(401).json({ message: "You need to sign in" });
        return res.status(401).json(info);
      }
      if (user) {
        const { accessToken, refreshToken } = createTokens(user);
        return res
          .cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: false,
          })
          .cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: false,
            maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
          })
          .cookie("user", JSON.stringify(user), {
            maxAge: 1000 * 60 * 60 * 24 * 30,
          })
          .redirect("http://localhost:3000");
      }
    })(req, res, next);
  },

  signOut: async (req, res) => {
    try {
      // Clear the authentication cookies
      res.clearCookie("refreshToken");
      res.clearCookie("accessToken");

      // clear the session or any other relevant data here

      res.status(200).json({ message: "Signed out successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = signingController;
