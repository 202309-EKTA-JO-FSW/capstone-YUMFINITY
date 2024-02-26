const express = require("express");
const router = express.Router();
const restaurantController = require("../Controllers/restaurant");

router.get("/", restaurantController.getFilteredRestaurants);

module.exports = router;
