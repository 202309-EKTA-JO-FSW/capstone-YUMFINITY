const User = require("../models/user");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

const saltRounds = 10;

exports.signUp = async (req, res) => {
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
    res.status(500).json({ error: "Error creating user" });
  }
};
