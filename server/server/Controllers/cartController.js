const mongoose = require("mongoose");
const Cart = require("../Models/cart");
const Order = require("../Models/order");



// GET cart by user id
router.get('/:userId', async (req, res) => {
    try {
       const cart = await Cart.findOne({ userId: req.params.userId });
       if (!cart) {
         return res.status(404).json({ message: 'Cart not found' });
       }
       res.json(cart);
    } catch (error) {
       res.status(500).json({ message: 'Server error' });
    }
   });


   // POST new cart, if there's already a cart, don't create
   exports.createCart = async (req, res) => {
    try {
       const existingCart = await Cart.findOne({ userId: req.body.userId });
       if (existingCart) {
        
           return res.status(400).json({ message: 'Cart already exists for this user' });
       }
       const cart = new Cart(req.body);
       await cart.save();
       res.status(201).json(cart);
    } catch (error) {
       res.status(500).json({ message: 'Server error' });
    }
   };



// POST cart by user id if there's an order being prepared, don't create
exports.createCartIfNoOrder = async (req, res) => {
   try {
      const userId = req.body.userId;
      const orderBeingPrepared = await isOrderBeingPrepared(userId);
  
      if (orderBeingPrepared) {
        return res.status(400).json({ message: 'Order is being prepared' });
      }
  
      const existingCart = await Cart.findOne({ userId: userId });
      if (existingCart) return res.status(400).json({ message: 'Cart already exists' });
  
      const cart = new Cart(req.body);
      await cart.save();
      res.status(201).json(cart);
   } catch (error) {
      res.status(500).json({ message: 'Server error' });
   }
  };
  

   
   // DELETE cart by user id
exports.deleteCart = async (req, res) => {
    try {
       const result = await Cart.deleteOne({ userId: req.params.userId });
       if (result.deletedCount === 0) return res.status(404).json({ message: 'Cart not found' });
       res.json({ message: 'Cart deleted' });
    } catch (error) {
       res.status(500).json({ message: 'Server error' });
    }
   };

   module.exports = cartController;