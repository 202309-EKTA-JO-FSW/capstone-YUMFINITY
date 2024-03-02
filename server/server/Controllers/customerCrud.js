const mongoose = require("mongoose");
const User = require("../Models/user");

const getCustomerById = async (req, res) => {
  const { id } = req.params;

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
  const { id } = req.params;

  try {
    const updatedCustomer = await User.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.json({ message: "Customer updated successfully", updatedCustomer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteCustomer = async (req, res) => {
  const { id } = req.params;

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