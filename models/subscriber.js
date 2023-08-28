// Import mongoose
const mongoose = require('mongoose');

// Create subscriber schema
const subscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

// Create subscriber model
const Subscriber = mongoose.model('Subscriber', subscriberSchema);

// Export subscriber model
module.exports = Subscriber;
