const mongoose = require("mongoose");
const Order = require("../Models/order");
const Cart = require("../Models/cart");
const User = require("../Models/user");
const Item = require("../Models/item");
const bcrypt = require("bcrypt");
const pagination = require("../utils/pagination");

const customerController = {
  // function for GET orders with reviews for signed in customer
  getOrdersWithReviews: async (req, res) => {
    // extract userId from req object
    const id = new mongoose.Types.ObjectId(req.user.userId);
    try {
      // Aggregation pipeline
      const pipeline = [
        // first, we filter orders by userId
        { $match: { userId: id } },
        // second, if there are reviews for the found orders, we add them to each document in a new field called "review"
        {
          $lookup: {
            from: "reviews",
            localField: "_id",
            foreignField: "orderId",
            as: "review",
          },
        },
        // third, sort orders by orderDate in descending order
        { $sort: { orderDate: -1 } },
      ];

      // Execute the aggregation pipeline
      const ordersWithReviews = await Order.aggregate(pipeline);

      // check if no orders was found
      if (!ordersWithReviews.length)
        return res
          .status(404)
          .json({ message: "No Orders Found for the provided user" });

      // paginate the results
      const list = pagination(req.query, ordersWithReviews);

      return res.status(200).json(list);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  // function for GET current order for the signed in customer
  getCurrentOrder: async (req, res) => {
    // extract userId from request body
    const id = req.user.userId;
    try {
      // find current order for userId
      const currentOrder = await Order.findOne({
        userId: id,
        orderStatus: "delivering",
      });
      // if there isn't a current order then send back message
      if (!currentOrder)
        return res.status(404).json({ message: "No Current Order" });

      return res.status(200).json(currentOrder);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  // function for deleting the current order for the signed in customer
  cancelCurrentOrder: async (req, res) => {
    // extract userId from request body
    const id = req.user.userId;
    try {
      const cancelOrder = await Order.findOneAndUpdate(
        { userId: id, orderStatus: "delivering" },
        { orderStatus: "cancelled" },
        { new: true },
      );

      // check if no order was found
      if (!cancelOrder)
        return res.status(404).json({
          message:
            "There isn't a delivering order to be cancelled for this customer",
        });

      // check if order cancelled and return successful message
      if (cancelOrder.orderStatus === "cancelled")
        return res
          .status(200)
          .json({ message: "Order cancelled successfully" });
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  // function for creating new order document from cart
  createNewOrder: async (req, res) => {
    // extract userId from request body
    const id = req.user.userId;
    try {
      // check if user has current delivering order
      const isDelivering = await Order.findOne({
        userId: id,
        orderStatus: "delivering",
      });
      if (isDelivering)
        return res
          .status(403)
          .json({ message: "User has a current order being delivered" });

      // retrieve user cart
      const userCart = await Cart.findOne({ userId: id });

      // if user doesn't have any items in the cart send error msg back to client
      if (!userCart)
        return res.status(404).json({ message: "No Items In Cart" });

      //  create new order with fields from cart and request body
      const { totalBill, totalPayment, paymentMethod, location } = req.body;
      const newOrder = Order.create({
        totalBill: totalBill,
        deliveryAddress: location,
        userId: id,
        restaurantId: userCart.restaurantId,
        items: userCart.items,
        specialOrderRequirement: userCart.specialOrderRequirement ?? null,
        payment: {
          totalPayment: totalPayment ?? null,
          paymentMethod: paymentMethod ?? null,
        },
      });

      // clear user cart after creating an order
      await Cart.deleteOne({ userId: id });

      // send response of created order back to client
      return res.status(201).json(newOrder);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  // function for GETting profile details for signed in user
  getCustomerById: async (req, res) => {
    const id = req.user.userId;

    try {
      const customer = await User.findById(id);

      if (!customer) {
        return res.status(404).json({ message: "Customer not found" });
      }

      res.status(200).json(customer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },

  // function for applying profile changes for signed in user
  updateCustomer: async (req, res) => {
    try {
      const id = req.user.userId;
      let password_hash;
      if (req.body.password)
        password_hash = await bcrypt.hash(req.body.password, 10);
      const updatedFields = {
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        addresses: req.body.addresses,
        password_hash,
      };

      const updatedCustomer = await User.findByIdAndUpdate(id, updatedFields, {
        runValidators: true,
        new: true,
      });

      if (!updatedCustomer) {
        return res.status(404).json({ message: "Customer not found" });
      }

      res
        .status(200)
        .json({ message: "Customer updated successfully", updatedCustomer });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },

  // function for deleting user
  deleteCustomer: async (req, res) => {
    const id = req.user.userId;

    try {
      const deletedCustomer = await User.findByIdAndDelete(id);

      if (!deletedCustomer) {
        return res
          .clearCookie("refreshToken")
          .clearCookie("accessToken")
          .status(404)
          .json({ message: "Customer not found" });
      }

      res
        .status(202)
        .json({ message: "Customer deleted successfully", deletedCustomer });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },

  // function to GET user cart
  getUserCart: async (req, res) => {
    const { userId } = req.user;
    try {
      const cart = await Cart.findOne({ userId: userId })
        .populate("restaurantId", {
          name: 1,
          restaurantPicture: 1,
          location: 1,
        })
        .populate("items.itemId");
      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }
      return res.json(cart);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = customerController;
