const express = require("express");
const router = express.Router();

// we will put all of our major routes here

// public API route for fetching restaurants
router.use("/restaurants", require("./restaurant"));

// public API route for signing in
router.use("/signIn", require("./sign"));

module.exports = router;
