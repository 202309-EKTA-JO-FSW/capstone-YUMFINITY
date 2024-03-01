const express = require("express");
const router = express.Router();
const restaurantController = require("../Controllers/restaurantController");

// GET all restuarants, or filter restaurants based on location, name, and/or category
router.get("/restaurants", restaurantController.getFilteredRestaurants);

// GET a specific restaurant by ID, send back the restaurant object including menu items and revies
router.get(
  "/restaurants/:id",
  restaurantController.getOneRestaurantWithMenuAndReviews,
);

module.exports = router;
