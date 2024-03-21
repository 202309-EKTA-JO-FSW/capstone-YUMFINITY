const Restaurant = require("../Models/restaurant");
const Item = require("../Models/item");
const Review = require("../Models/review");
const {
  getNearbyRestaurantsSquareArea,
  getNearbyRestaurantsCircleArea,
} = require("../utils/locationFilter");
const pagination = require("../utils/pagination");

const restaurantController = {
  getFilteredRestaurants: async (req, res) => {
    const queries = req.query;
    // create filter object based on passed url parameters
    let locationArray;
    let filters = {};
    if (queries.name) filters.name = { $regex: queries.name, $options: "i" };
    if (queries.category) filters.category = queries.category;
    if (queries.loc) {
      locationArray = queries.loc.split(" ");
      filters = {
        ...filters,
        ...getNearbyRestaurantsSquareArea(locationArray),
      };
    }

    // If no filter is applied, all restaurants will be shown because filter object will be empty
    try {
      let restaurants = await Restaurant.find(filters);

      if (queries.loc)
        restaurants = getNearbyRestaurantsCircleArea(
          locationArray,
          restaurants,
        );

      // pagination based on page and limit queries
      let list = {};
      if (restaurants.length) list = pagination(queries, restaurants);
      // throw an error in case page query out of bounds
      if (list instanceof Error) throw new Error(`${list.message}`);

      res.status(200).json(list);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
  getOneRestaurantWithMenuAndReviews: async (req, res) => {
    const { id } = req.params;

    try {
      const restaurant = await Restaurant.findById(id);
      // if restaurant doesn't exist, exit with response
      if (!restaurant)
        return res.status(404).json({
          message: "Restaurant does not exist, check the provided ID",
        });
      const items = await Item.find({ restaurantID: id });
      const restaurantReviews = await Review.find({ restaurantId: id })
        .limit(50)
        .populate("userId");
      return res.status(200).json({ restaurant, items, restaurantReviews });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = restaurantController;
