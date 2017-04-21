/*
    App - Main entry point of backend app where all files are loaded into
*/

/* Requires for modules that will be used */

// Express object
const express = require('express');

// Body Parser
const bodyParser = require('body-parser');

// Mongoose
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/jwNotes');

// Setup express app
const app = express();

// Set up body parser for express
app.use(bodyParser.json());

// Use the router with all of its routes with api attached on the front of each req
app.use('/api', require('./routes/router'));

// Port Number
const port = 3000;

// Setting up the server with a message to tell us everything is up and running
app.listen(port, function () {
    console.log('Server is up and running on port ' + port + '!');
});
