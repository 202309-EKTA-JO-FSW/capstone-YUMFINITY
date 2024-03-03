const express = require('express');
const router = express.Router();
const cartController = require("../Controllers/cartController");


// GET cart by user id
router.get('/:userId', cartController.getCart);

// POST new cart
router.post('/', cartController.createCart);

// POST cart by user id
router.post('/if-no-order', cartController.createCartIfNoOrder);

// DELETE cart 
router.delete('/:userId', cartController.deleteCart);


module.exports = router;
