const express = require("express");
const router = express.Router();
const customerController = require("../Controllers/customerController");

// order specific routes

// fetch past orders with their respective reviews and ratings for a given user (signed in)
router.get("/orders", customerController.getOrdersWithReviews);

// fetch current order for signed in user
router.get("/current-order", customerController.getCurrentOrder);

// delete current order for signed in user
router.patch("/cancel-order", customerController.cancelCurrentOrder);

// checkout route for submitting signed in user cart
router.post("/checkout", customerController.createNewOrder);

// create review for orders with no reviews
router.post("/order/review", customerController.createReview);

// ##################################

// cart specific routes

// fetch signed in user Cart if exists
router.get("/cart", customerController.getUserCart);

// delete signed in user Cart
router.delete("/cart", customerController.deleteCart);

// edit user cart, includes creating and updating the cart
router.patch("/cart", customerController.upsertCart);

module.exports = router;
