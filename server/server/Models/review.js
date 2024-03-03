const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
      // transform number to integer
      get: (v) => Math.round(v),
      set: (v) => Math.round(v),
    },
    comment: {
      type: String,
    },
    reviewDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Review", reviewSchema);
