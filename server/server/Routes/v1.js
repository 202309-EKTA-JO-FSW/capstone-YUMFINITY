const express = require("express");
const router = express.Router();
const cartRoutes = require("./routes/cartRoutes");


// we will put all of our major routes here

// public API route for fetching restaurants
router.use("/", require("./restaurantRoutes"));

// public API routes for sign in and sign up
router.use("/", require("./signRoutes"));

// Use the cart routes for handling cart-related requests
app.use('/cart', cartRoutes);

module.exports = router;
