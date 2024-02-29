const itemsModel  = require("../models/Item");

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
    const { title, description, restaurantID, price, itemPicture, category, availableQuantity } =
      req.body;
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

    res
      .status(201)
      .json({ message: "Item added successfully", newItem });
  } catch (error) {
    console.error("Error adding item:", error);
    res.status(500).json({ message: error.message });
  }
};



  // admin update item
  const updateItem = async (req, res) => {
    try {
       const { id } = req.params; 
       const { title, price, description, itemPicture, category, availableQuantity } = req.body; 
       
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
      const ids = req.params.ids.split(',');
      
      const deleteItems = await itemsModel.deleteMany({ _id: { $in: ids } });
  
      if (deleteItems.deletedCount > 0) {
        res.json({ message: `${deleteItems.deletedCount} documents deleted` });
      } else {
        res.status(422).json({ message: "The Item you are trying to delete wasn't found" });
      };
    } catch (error) {
      res.status(500).json(error.message);
    };
  };




module.exports = {
    getItemById,
    addNewItem,
    updateItem,
    removeOneOrManyItems,
  };