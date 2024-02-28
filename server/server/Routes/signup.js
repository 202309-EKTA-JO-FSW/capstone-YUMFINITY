const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/userController");

// Define the sign-up route
router.post(
  "/signup",

  // Validation rules
  body("username", "Username should be at least 5 characters")
    .isLength({ min: 5 })
    .escape(),
  body("password", "Password should be at least 5 characters")
    .isLength({ min: 5 })
    .escape(),
  body("email", "Email should be in 'example@email.com' format")
    .isEmail()
    .escape(),
  body("firstName", "First Name should not be empty").notEmpty().escape(),
  body("lastName", "Last Name should not be empty").notEmpty().escape(),
  body("phoneNumber", "Phone Number should be a Jordanian mobile number")
    .isMobilePhone("ar-JO")
    .escape(),

  // Controller function
  userController.signUp,
);

module.exports = router;
