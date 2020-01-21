// Import express
const express = require('express');
// Define the router using the express router
const programRouter = express.Router();

// Import the programController
const programController = require('../controllers/program-controller');

// For each route access the correct controller method

// Request all program, send it to the / route
programRouter.get('/', programController.findAll);

// Request single quote, send it to the /:id route
programRouter.get('/:id', programController.findById);

// Export the router
module.exports = programRouter;