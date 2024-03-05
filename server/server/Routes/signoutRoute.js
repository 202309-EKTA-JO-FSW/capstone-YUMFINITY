const express = require('express');
const router = express.Router();
const passAuthMiddleware = require('../middleware/passAuthMiddleware'); 
const signOutController = require('../controllers/signOutController');

// Sign-out route
router.post('/signout', passAuthMiddleware, signOutController.signOut);


module.exports = router;
