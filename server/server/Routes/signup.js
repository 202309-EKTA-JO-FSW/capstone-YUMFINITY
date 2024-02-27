const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/userController");

// Define the sign-up route
router.post(
  "/signup",

  // Validation rules
  body("username").isLength({ min: 5 }),
  body("password").isLength({ min: 5 }),
  body("email").isEmail(),
  body("firstName").notEmpty(),
  body("lastName").notEmpty(),
  body("phoneNumber").isMobilePhone(),

  // Controller function
  userController.signUp,
);

module.exports = router;
