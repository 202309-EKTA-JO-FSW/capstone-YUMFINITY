const express = require("express");
const router = express.Router();
const Item = require("../Models/item");

router.get("/", async (req, res) => {
  try {
    const { category, priceRange, availableQuantity, page, limit } = req.query;

    // Pagination
    const pageInt = parseInt(page, 10) || 0;
    const limitInt = parseInt(limit, 10) || 20; // adjusted limit to show 20 items per page

    const filters = {};
    if (category) filters.category = category;
    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split("-").map(Number);
      filters.price = { $gte: minPrice, $lte: maxPrice };
    }
    if (availableQuantity) filters.availableQuantity = { $gte: availableQuantity };

    const items = await Item.find(filters)
      .skip(pageInt * limitInt)
      .limit(limitInt);

    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
