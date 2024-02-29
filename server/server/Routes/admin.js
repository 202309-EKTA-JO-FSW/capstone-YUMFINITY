const express = require("express");

const router = express.Router();
const adminController = require("../controllers/adminCrud");

router.post("/add", adminController.addNewItem);
router.put("/update/:id", adminController.updateItem);
router.delete('/remove/:ids', adminController.removeOneOrManyItems);
router.get('/filter', adminController.getItemById);


module.exports = router;