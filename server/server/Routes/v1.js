const express = require("express");
const router = express.Router();
// we will put all of our major routes here
router.use("/restaurants", require("./restaurant"));

module.exports = router;
