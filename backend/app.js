/*
    App - Main entry point of backend app where all files are loaded into
*/

/* Requires for modules that will be used */

// Express object
const express = require('express');

// Setup express app
const app = express();

// Port Number
const port = 3000;



// Setting up the server with a message to tell us everything is up and running
app.listen(port, function () {
    console.log('Server is up and running on port ' + port + '!');
});
