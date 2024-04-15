const mongoose = require("mongoose");
const Order = require("../Models/order");
const Cart = require("../Models/cart");
const User = require("../Models/user");
const Item = require("../Models/item");
const Review = require("../Models/review");
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
      await Item.populate(ordersWithReviews, { path: "items.itemId" });

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
      })
        .populate("restaurantId")
        .populate("items.itemId");
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
      const {
        totalBill,
        totalPayment,
        paymentMethod,
        location,
        specialOrderRequirement,
      } = req.body;
      const newOrder = Order.create({
        totalBill: totalBill,
        deliveryAddress: location,
        userId: id,
        restaurantId: userCart.restaurantId,
        items: userCart.items,
        specialOrderRequirement:
          specialOrderRequirement ?? userCart.specialOrderRequirement,
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
        email: req.body.email,
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
      return res.json({ Cart: cart, message: "fetched successfully" });
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  // function to DELETE user cart
  deleteCart: async (req, res) => {
    const { userId } = req.user;
    try {
      const cart = await Cart.findOne({ userId });
      // return quantity of each item to be added back to inventory
      if (cart)
        cart.items.forEach(async (item) => {
          await Item.findByIdAndUpdate(item.itemId, {
            $inc: { availableQuantity: item.quantity },
          });
        });
      const result = await Cart.deleteOne({ userId: userId });
      if (result.deletedCount === 0)
        return res.status(404).json({ message: "Cart not found" });
      res.json({ message: "Cart deleted" });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // function to create or update user cart
  upsertCart: async (req, res) => {
    const { userId } = req.user;
    const {
      itemId,
      quantity,
      specialOrderRequirement,
      specialItemRequirement,
    } = req.body;

    // check if quantity is not 0
    if (quantity === 0)
      return res.status(400).json({ message: "Quantity cannot be zero" });

    try {
      // find item document
      const item = await Item.findById(itemId);
      if (!item) return res.status(404).json({ message: "Item not found" });
      // check item availabilty
      if (item.availableQuantity === 0 && quantity > 0)
        return res
          .status(400)
          .json({ message: "This item is currently out of stock." });

      // find/create cart and add/update item in it
      const cart = await Cart.findOne({ userId });
      // if cart doesn't exist, we create new one and add item, then decrease item available quantity
      if (!cart) {
        // check if provided quantity is above zero
        if (quantity <= 0)
          return res.status(400).send({
            message: "Cannot provide negative quantity if Cart doesn't exist",
          });

        // create new cart document
        const newCart = new Cart({
          userId,
          restaurantId: item.restaurantID,
          items: [],
          specialOrderRequirement,
        });

        // we add the item to items array in cart
        newCart.items.push({
          itemId,
          quantity,
          specialItemRequirement,
        });

        // we change (decrease/increase) item available quantity by the provided required quantity
        item.availableQuantity -= quantity;
        // check if requested quantity exceeds available quantity
        if (item.availableQuantity < 0)
          return res.status(403).json({
            message: "Not enough items in stock for the provided quantity.",
          });

        // save item and new cart documents
        await newCart.save();
        await item.save();

        const populatedCart = await newCart.populate([
          {
            path: "restaurantId",
            select: {
              name: 1,
              restaurantPicture: 1,
              location: 1,
            },
          },
          "items.itemId",
        ]);

        // return response with new cart
        return res.status(201).json({
          message: "New cart created successfully",
          Cart: populatedCart,
        });
      }

      // if cart exists, we add/update the item to cart
      else {
        // check if item is from same restaurant as current cart
        if (item.restaurantID.toString() !== cart.restaurantId.toString())
          return res
            .status(403)
            .json({ message: "Items must be from the same restaurant." });

        // check if item already exists in cart
        const itemIndex = cart.items.findIndex(
          (item) => item.itemId.toString() === itemId,
        );
        // if item does not exist in cart then add it
        if (itemIndex < 0) {
          // forbid negative quantity if item doesn't exist in cart
          if (quantity < 0)
            return res.status(400).json({
              message:
                "Cannot provide negative quantity if Item doesn't exist in Cart",
            });
          cart.items.push({
            itemId,
            quantity,
            specialItemRequirement,
          });
        }
        // if item exists in cart, we change it's quantity
        else {
          cart.items[itemIndex].quantity += quantity;
          if (cart.items[itemIndex].quantity < 0)
            return res.status(400).json({
              message: "Item Quantity in Cart cannot become negative",
            });

          // if item quantity becomes 0, we remove it from items array
          if (cart.items[itemIndex].quantity === 0)
            cart.items.splice(itemIndex, 1);
        }

        // we change (decrease/increase) item available quantity by the provided required quantity
        item.availableQuantity -= quantity;
        // check if requested quantity exceeds available quantity
        if (item.availableQuantity < 0)
          return res.status(403).json({
            message: "Not enough items in stock for the provided quantity.",
          });

        // save item and new cart documents
        await item.save();
        // if cart items array becomes empty, we delete the cart document and return response
        if (cart.items.length === 0) {
          await Cart.deleteOne({ userId });
          return res.status(201).json({ message: "Cart emptied successfully" });
        }
        await cart.save();

        const populatedCart = await cart.populate([
          {
            path: "restaurantId",
            select: {
              name: 1,
              restaurantPicture: 1,
              location: 1,
            },
          },
          "items.itemId",
        ]);

        // return response with new cart
        return res
          .status(200)
          .json({ message: "Cart updated successfully", Cart: populatedCart });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  createReview: async (req, res) => {
    try {
      const { orderId, rating, comment } = req.body;

      // fetch order to make sure it exists
      const order = await Order.findById(orderId);

      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }

      // check if order already has a review
      const existingReview = await Review.findOne({ orderId });

      if (existingReview) {
        return res
          .status(400)
          .json({ message: "Review already exists for this order" });
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

      res
        .status(201)
        .json({ message: "Review created successfully", review: savedReview });
    } catch (error) {
      console.error("Error creating review:", error);
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = customerController;
