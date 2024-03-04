const itemsModel = require("../Models/item");
const restaurantsModel = require("../Models/restaurant");
const ordersModel = require("../Models/order");


// Admin get item by id
const getItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await itemsModel.findById(id);
    if (!item) {
      // If the item is not found
      return res.status(404).json({ message: "Item not found" });
    }
    // If the item is found
    res.json(item);
  } catch (err) {
    // If there's an error
    res.status(500).json({ message: err.message });
  }
};

// admin add new item
const addNewItem = async (req, res) => {
  try {
    const {
      title,
      description,
      restaurantID,
      price,
      itemPicture,
      category,
      availableQuantity,
    } = req.body;
    const newItem = itemsModel({
      title,
      description,
      restaurantID,
      price,
      itemPicture,
      category,
      availableQuantity,
    });

    await newItem.save();

    res.status(201).json({ message: "Item added successfully", newItem });
  } catch (error) {
    console.error("Error adding item:", error);
    res.status(500).json({ message: error.message });
  }
};

// admin update item
const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      price,
      description,
      itemPicture,
      category,
      availableQuantity,
    } = req.body;

    const updatedItem = await itemsModel.findByIdAndUpdate(
      id,
      {
        title,
        price,
        description,
        itemPicture,
        category,
        availableQuantity,
      },
      {
        runValidators: true,
        new: true,
      },
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({ message: "Item updated successfully", updatedItem });
  } catch (error) {
    console.error("Error updating item:", error);
    res.status(500).json({ message: error.message });
  }
};

// Admin delete one or more from an items
const removeOneOrManyItems = async (req, res) => {
  try {
    const ids = req.params.ids.split(",");

    const deleteItems = await itemsModel.deleteMany({ _id: { $in: ids } });

    if (deleteItems.deletedCount > 0) {
      res.json({ message: `${deleteItems.deletedCount} documents deleted` });
    } else {
      res
        .status(422)
        .json({ message: "The Item you are trying to delete wasn't found" });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//  Admin add new Restaurant
const addnewRestaurant = async (req, res) => {
  try {
    const {
      name,
      location,
      phoneNumber,
      restaurantPicture,
      acceptedPayment,
      category,
    } = req.body;

    const newRestaurant = new restaurantsModel({
      name,
      location,
      phoneNumber,
      restaurantPicture,
      acceptedPayment,
      category,
    });

    await newRestaurant.save();

    res
      .status(201)
      .json({ message: "Restaurant added successfully", newRestaurant });
  } catch (error) {
    console.error("Error adding restaurant:", error);
    res.status(500).json({ message: error.message });
  }
};

// Admin get restaurant by id
const getRestaurantById = async (req, res) => {
  const { id } = req.params;
  try {
    const restaurant = await restaurantsModel.findById(id);
    if (!restaurant) {
      // If the restaurant is not found
      return res.status(404).json({ message: "Restaurant not found" });
    }
    // If the restaurant is found
    res.json(restaurant);
  } catch (err) {
    // If there's an error
    res.status(500).json({ message: err.message });
  }
};

// admin update restaurant details
const updateRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      location,
      phoneNumber,
      restaurantPicture,
      acceptedPayment,
      category,
    } = req.body;

    const updatedRestaurant = await restaurantsModel.findByIdAndUpdate(
      id,
      {
        name,
        location,
        phoneNumber,
        restaurantPicture,
        acceptedPayment,
        category,
      },
      { runValidators: true, new: true },
    );
    if (!updatedRestaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    res
      .status(200)
      .json({ message: "Restaurant updated successfully", updatedRestaurant });
  } catch (error) {
    console.error("Error updating restaurant:", error);
    res.status(500).json({ message: error.message });
  }
};

// Admin delete one or more from an restaurants
const removeOneOrManyRestaurants = async (req, res) => {
  try {
    const ids = req.params.ids.split(",");

    const deleterestaurants = await restaurantsModel.deleteMany({
      _id: { $in: ids },
    });

    if (deleterestaurants.deletedCount > 0) {
      res.json({
        message: `${deleterestaurants.deletedCount} documents deleted`,
      });
    } else {
      res.status(422).json({
        message: "The Restaurant you are trying to delete wasn't found",
      });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};


// Admin retrieving all current orders with the status "delivering"
const getDeliveringOrders = async (req, res) => {
  try {
     const deliveringOrders = await ordersModel.find({ orderStatus: 'delivering' });
     if (deliveringOrders.length === 0) {
       return res.status(404).json({ message: "No delivering orders found" });
     }
     res.status(200).json(deliveringOrders);
  } catch (error) {
     console.error("Error retrieving delivering orders:", error);
     res.status(500).json({ message: error.message });
  }
 };


module.exports = {
  getItemById,
  addNewItem,
  updateItem,
  removeOneOrManyItems,
  addnewRestaurant,
  getRestaurantById,
  updateRestaurant,
  removeOneOrManyRestaurants,
  getDeliveringOrders,
};
