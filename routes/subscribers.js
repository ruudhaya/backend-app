// Import express
const express = require('express');

// Import subscribers controller
const subscribersController = require('../controllers/subscribers');

// Create router
const router = express.Router();

// Create routes
router.post('/', subscribersController.createSubscriber);
router.get('/', subscribersController.getSubscribers);

// Export router
module.exports = router;
