const mongoose = require("mongoose");
const User = require("../Models/user");

const getCustomerById = async (req, res) => {
  const id = req.user.userId;

  try {
    const customer = await User.findById(id).populate("cart");

    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.json(customer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};


const updateCustomer = async (req, res) => {
  try {
      const id = req.user.userId;

      const updatedFields = {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          phoneNumber: req.body.phoneNumber,
          addresses: req.body.addresses,
      };

      const updatedCustomer = await User.findByIdAndUpdate(
          id,
          updatedFields,
          { runValidators: true, new: true }
      );

      if (!updatedCustomer) {
          return res.status(404).json({ message: "Customer not found" });
      }

      res.status(200).json({ message: "Customer updated successfully", updatedCustomer });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
  }
};


const deleteCustomer = async (req, res) => {
  const id = req.user.userId;

  try {
    const deletedCustomer = await User.findByIdAndDelete(id);

    if (!deletedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.json({ message: "Customer deleted successfully", deletedCustomer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};