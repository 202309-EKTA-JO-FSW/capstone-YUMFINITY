const mongoose = require("mongoose");

// schema
const restaurantSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  name: {
    type: String,
    required: true,
  },

  location: {
    type: [String],
    required: true,
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
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Restaurant", restaurantSchema);
