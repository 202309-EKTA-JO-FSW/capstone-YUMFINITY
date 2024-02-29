const express = require("express");
const router = express.Router();
const restaurantController = require("../Controllers/restaurantController");

// GET all restuarants, or filter restaurants based on location, name, and/or category
router.get("/restaurants", restaurantController.getFilteredRestaurants);

module.exports = router;
