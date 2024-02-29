const express = require("express");

const router = express.Router();
// const adminController = require("../controllers/adminCrud");

router.post("/add", verify, verifyIsAdmin, adminController.addNewItem);
router.put("/update/:id", verify, verifyIsAdmin, adminController.updateItem);
router.delete('/remove', verify, verifyIsAdmin, adminController.removeOneOrManyItems);
router.get('/filter', verify, verifyIsAdmin, adminController.getItemById);


module.exports = router;