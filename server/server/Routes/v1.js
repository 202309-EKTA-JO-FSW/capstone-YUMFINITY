const express = require("express");
const router = express.Router();

// we will put all of our major routes here

// public API route for fetching restaurants
router.use("/", require("./restaurantRoutes"));

// public API routes for sign in and sign up
router.use("/", require("./signRoutes"));

module.exports = router;
