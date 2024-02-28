const User = require("../Models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signingController = {
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
      // if all processes are passed, send back a token which can be used for authentication
      const token = jwt.sign(
        { username: username, isAdmin: user.isAdmin, id: user._id },
        process.env.SECRET_KEY,
        { expiresIn: "15m" },
      );
      res.status(200).json({ success: true, token: `Bearer ${token}` });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = signingController;
