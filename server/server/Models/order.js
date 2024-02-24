const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    orderStatus: {
      type: String,
      required: true,
      enum: {
        values: ["delivering", "cancelled", "completed"],
        message: 'should be either "delivering", "cancelled" or "completed"',
      },
      default: "delivering",
    },
    totalBill: {
      type: Number,
      required: true,
      min: 0,
    },
    deliveryAddress: {
      type: [Number], // [latitude, longitude]
      required: true,
      validate: {
        // custom validation rule to check if the address is [latitude, longitude]
        validator: (v) => {
          return v.length === 2;
        },
        message: (props) => {
          return `${props.value} should be an array of two elements like [longitude, latitude]`;
        },
      },
    },
    deliveryFee: {
      type: Number,
      required: true,
      default: 5,
      min: 0,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    items: {
      type: [
        {
          itemId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item",
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
            min: 1,
            default: 1,
            // methods to round float numbers to the nearest integer
            get: (v) => Math.round(v),
            set: (v) => Math.round(v),
          },
          specialItemRequirement: String,
        },
      ],
      validate: [
        {
          // items array should be present in order document
          validator: (val) => {
            if (val.length === 0) return false;
          },
          message: "Items field in Order must not be empty",
        },
        {
          // map through each element of items and check that they are all unique
          validator: (val) => {
            let unique = [];
            val.forEach((item) => {
              if (unique.includes(item.itemId)) return false;
              unique.push(item.itemId);
            });
            if (unique.length !== val.length) return false;
          },
          message: "Each Item in Items Array must have a unique itemId",
        },
      ],
    },
    specialOrderRequirement: String,
    payment: {
      totalPayment: Number,
      paymentMethod: String,
    },
  },
  {
    timestamps: true,
  },
);

// order document will be deleted after 1 hour only if order status was still delivering
orderSchema.index(
  { createdAt: 1 },
  {
    expireAfterSeconds: 3600,
    partialFilterExpression: { orderStatus: "delivering" },
  },
);

module.exports = mongoose.model("Order", orderSchema);
