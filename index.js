// Create an express POST endpoint called /subscribe to receive an email and store them on mongodb
// Create an express GET endpoint called /subscribers to retrieve all emails from mongodb

// Import express
const express = require('express');

// Import body-parser
const bodyParser = require('body-parser');

// Import mongoose
const mongoose = require('mongoose');

// Import cors
const cors = require('cors');

// Import routes
const routes = require('./routes');

require('dotenv').config();

// Create express app

const app = express();

// Set port
const port = process.env.PORT || 3001;

// Configure body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure cors
app.use(cors());

// Configure routes
app.use('/', routes);

console.log("MONGODB_URI:", process.env.MONGODB_URI);
// console.log(process.env.MONGODB_URI);

// Connect to mongoose
// use the mongo db connection string with environment variables
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose.connect('mongodb://localhost:27017/subscription', { useNewUrlParser: true });

// Listen on port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}
);

