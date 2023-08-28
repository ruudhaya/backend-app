// Import subscriber model
const Subscriber = require('../models/subscriber');

// Create controller
const subscribersController = {};

// Create endpoint /subscribers
subscribersController.getSubscribers = async (req, res) => {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
}

// Create endpoint /subscribers
subscribersController.createSubscriber = async (req, res) => {
    const subscriber = new Subscriber({
        email: req.body.email
    });
    await subscriber.save();
    res.json({
        'status': 'Subscriber saved'
    });
}

// Export controller
module.exports = subscribersController;
