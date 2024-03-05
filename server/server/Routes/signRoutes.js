const express = require("express");
const router = express.Router();
const signingController = require("../Controllers/signingController");
const { body } = require("express-validator");
const passport = require("passport");

router.post("/signIn", signingController.signIn);

// Define the sign-up route
router.post(
  "/signUp",

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
  signingController.signUp,
);

// route for signing in with google
router.get(
  "/google",
  passport.authenticate("google", {
    scope:["profile", "email"],
  }),
);

// google authentication callback
router.get("/google/callback", signingController.signWithGoogle);

module.exports = router;
