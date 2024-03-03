const express = require("express");
const router = express.Router();
const passportAuthMiddleware = require("../Middlewares/passportAuthMiddleware");

// we will put all of our major routes here

// public API route for fetching restaurants
router.use("/", require("./restaurantRoutes"));

// public API routes for sign in and sign up
router.use("/", require("./signRoutes"));

// customer specific routes
router.use("/", passportAuthMiddleware, require("./customerRoutes"));

module.exports = router;
