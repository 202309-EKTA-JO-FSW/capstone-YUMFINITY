const express = require("express");
const router = express.Router();
const passportAuthMiddleware = require("../Middlewares/passportAuthMiddleware");
const authorizeAdmin = require("../Middlewares/authorizeAdmin");

// we will put all of our major routes here

// public API route for fetching restaurants
router.use("/", require("./restaurantRoutes"));

// public API routes for sign in and sign up
router.use("/", require("./signRoutes"));

// admin specific routes
router.use(
  "/admin",
  passportAuthMiddleware,
  authorizeAdmin,
  require("./adminRoutes"),
);

module.exports = router;
