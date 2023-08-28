// Import express
const express = require('express');

// Import subscribers
const subscribers = require('./subscribers.js');

// Create router
const router = express.Router();

// Configure router
router.use('/subscribers', subscribers);

// Export router
module.exports = router;
