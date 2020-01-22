// Import the Section model.
const Section =  require('../models/sections');

// Instantiate the controller object
const sectionController = {};

// Controller method for handling a request for all sections
sectionController.findAll = (req, res) => {
  // Uses the findAll method from Section
  Section.findAll()
  .then(sections => {
    // Sends the sections as a JSON object
    res.json({
      message: 'Success',
      data: sections
    });
  })
  .catch(err => {
    // If something goes wrong it logs the error in the console and sends it as a JSON object
    console.log(err);
    res.status(500).json({err});
  });
};

// Controller method for handling a request for a single section
sectionController.findById = (req, res) => {
  // Sections method for finding by id, passes the id as an argument
  Section.findById(req.params.id)
  .then(section => {
    // Sends the section as a JSON object
    res.json({
      message: "Success",
      data: section
    });
  })
  .catch(err => {
    // If something goes wrong it logs the error in the console and sends it as a JSON object
    console.log(err);
    res.status(500).json({err});
  });
};

// Export the controller
module.exports = sectionController;