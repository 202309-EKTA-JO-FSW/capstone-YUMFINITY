const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password_hash: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    profilePicture: String, // Path to the image of the user inside backend
    phoneNumber: {
      type: String,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    addresses: [
      {
        addressName: {
          type: String,
          required: true,
        },
        location: {
          type: [Number], // [latitude, longitude]
          validate: {
            validator: (v) => {
              return v.length === 2;
            },
            message: (props) => {
              return `${props.value} should be an array of two elements like [latitude, longitude]`;
            },
          },
        },
      },
    ],
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", userSchema);
