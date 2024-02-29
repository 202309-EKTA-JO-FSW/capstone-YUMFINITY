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
    const ItemData = req.body;
    try {
      const newItem = await itemsModel.create(ItemData);
      res.status(201).json(newItem);
    } catch (err) {
      res.status(400).json({ message: err.message });
    };
  };



  // admin update item
const updateItem = async (req, res) => {
    const { id } = req.params;
    try {
      const updatedItem = await itemsModel.findByIdAndUpdate(
        id,
        {
          $set: req.body,
        },
        { new: true }
      );
      if (!updatedItem) {
        res.status(422).json({
          message: "The Item you are trying to update wasn't found",
        });
      } else {
        res.json(updatedItem);
      }
    } catch (err) {
      res.status(422).json({ message: err.message });
    }
  };



// Admin delete one or more from an items 
const removeOneOrManyItems = async (req, res) => {
    try {
      // Example: { ids: ['id1', 'id2', 'id3'] }
      const { ids } = req.body;
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