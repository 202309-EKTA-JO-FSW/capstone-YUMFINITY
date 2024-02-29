const express = require("express");

const router = express.Router();
const adminController = require("../controllers/adminCrud");

router.post("/add", adminController.addNewItem);
router.patch("/update/:id", adminController.updateItem);
router.delete('/remove/:ids', adminController.removeOneOrManyItems);
router.get('/filter', adminController.getItemById);
 jana/feature/admin-CRUD-item
router.post("/add", adminController.addnewRestaurant);
router.patch("/update/:id", adminController.updateRestaurant);
router.delete('/remove/:ids', adminController.removeOneOrManyRestaurants);
router.get('/filter', adminController.getRestaurantById);

main


module.exports = router;