const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
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
        return `${props.value} should be an array of two elements like [latitude, longitude]`;
      },
    },
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  restaurantPicture: {
    type: String,
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
