const express = require('express');

// Define the router using the express router
const sectionRouter = express.Router();

// Import the sectionsController
const sectionController = require('../controllers/section-controller');

// Request all sections, send it to the / route
sectionRouter.get('/', sectionController.findAll);

// Request single section, send it to the /:id route
sectionRouter.get('/:id', sectionController.findById);

// Request for a certain program_id
// sectionRouter.get('/:program_id', sectionController.findByProgramId);

// Export the router
module.exports = sectionRouter;