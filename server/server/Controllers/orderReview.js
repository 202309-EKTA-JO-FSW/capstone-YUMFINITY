const express = require('express');
const router = express.Router();
const Order = require('../Models/order');
const Review = require('../Models/review');

router.post('/order/review', async (req, res) => {
    try {
        const { orderId, rating, comment } = req.body;

        // fetch order to make sure it exists
        const order = await Order.findById(orderId);

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        // check if order already has a review
        const existingReview = await Review.findOne({ orderId });

        if (existingReview) {
            return res.status(400).json({ message: 'Review already exists for this order' });
        }

        // create a new review
        const newReview = new Review({
            rating,
            comment,
            restaurantId: order.restaurantId,
            userId: order.userId,
            orderId: orderId,
        });

        // review saved to database
        const savedReview = await newReview.save();

        res.status(201).json({ message: 'Review created successfully', review: savedReview });
    } catch (error) {
        console.error('Error creating review:', error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
