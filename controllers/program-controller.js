// controllers/quote-controller.js

// Import the Program model.
const Program = require('../models/programs');

// Instantiate the controller object
const programController = {};

// Controller method for handling a request for all quotes
programController.findAll = (req, res) => {
  // Uses the findAll method from Program
  Program.findAll()
    .then(programs => {
      // Sends the quotes as a JSON object
      res.json({
        message: 'Success',
        data: programs
      });
    })
    .catch(err => {
      // If something goes wrong it logs the error in the console and sends it as a JSON object
      console.log(err);
      res.status(500).json({ err });
    });
};

// Controller method for handling a request for a single quote
programController.findById = (req, res) => {
  // Programs method for finding by id, passes the id as an argument
  Program.findById(req.params.id)
    .then(programs => {
      // Sends the quote as a JSON object
      res.json({
        message: "Success",
        data: programs
      });
    })
    .catch(err => {
      // If something goes wrong it logs the error in the console and sends it as a JSON object
      console.log(err);
      res.status(500).json({ err });
    });
};

// Export the controller
module.exports = programController;