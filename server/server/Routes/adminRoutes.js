const express = require("express");
const router = express.Router();
const adminController = require("../Controllers/adminController");

// CRUD routes for items
router.get("/item/:id", adminController.getItemById);
router.post("/item/add", adminController.addNewItem);
router.patch("/item/update", adminController.updateItem);
router.delete("/item/remove", adminController.removeOneOrManyItems);

// CRUD routes for restaurants
router.get("/restaurant/:id", adminController.getRestaurantById);
router.post("/restaurant/add", adminController.addnewRestaurant);
router.patch("/restaurant/update", adminController.updateRestaurant);
router.delete("/restaurant/remove", adminController.removeOneOrManyRestaurants);

// CRUD routes for orders
router.get("/current-orders", adminController.getDeliveringOrders);
router.patch(
  "/order/update-status",
  adminController.updateOrderStatusToCompleted,
);

module.exports = router;
