const express = require("express");
const router = express.Router();

const adminController = require("../Controllers/adminController");

// CRUD routes for items
router.get("/item/:id", adminController.getItemById);
router.post("/item/add", adminController.addNewItem);
router.patch("/item/update/:id", adminController.updateItem);
router.delete("/item/remove/:ids", adminController.removeOneOrManyItems);

// CRUD routes for restaurants
router.get("/restaurant/:id", adminController.getRestaurantById);
router.post("/restaurant/add", adminController.addnewRestaurant);
router.patch("/restaurant/update/:id", adminController.updateRestaurant);
router.delete(
  "/restaurant/remove/:ids",
  adminController.removeOneOrManyRestaurants,
);

module.exports = router;
