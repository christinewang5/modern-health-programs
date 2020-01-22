const express = require('express');

// Define the router using the express router
const sectionRouter = express.Router();

// Import the sectionsController
const sectionController = require('../controllers/section-controller');

// Request all sections, send it to the / route
sectionRouter.get('/', sectionController.findAll);

// Request for a certain program_id
sectionRouter.get('/:id', sectionController.findById);

// Export the router
module.exports = sectionRouter;