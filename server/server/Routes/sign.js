const express = require("express");
const router = express.Router();
const signingController = require("../Controllers/signIn");

router.post("/", signingController.signIn);

module.exports = router;
