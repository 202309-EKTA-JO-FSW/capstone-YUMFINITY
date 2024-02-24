const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  name: {
    type: String,
    required: true,
  },

  location: {
    type: [Number],
    validate: {
      validator: (v) => {
        return v.length === 2;
      },
      message: (props) => {
        return `${props.value} should be an array of two elements like [longitude, latitude]`;
      },
    },
  },

  phoneNumber: {
    type: String,
    required: true,
  },

  restaurantPicture: {
    type: String,
    required: true,
  },

  acceptedPayment: {
    type: [String],
    required: true,
  },

  category: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
