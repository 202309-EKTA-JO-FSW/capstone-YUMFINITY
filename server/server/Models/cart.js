const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
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
  },
  { timestamps: true },
);

// make the cart document live only for 45 minutes
cartSchema.index({ createdAt: 1 }, { expireAfterSeconds: 2700 });

module.exports = mongoose.model("Cart", cartSchema);
