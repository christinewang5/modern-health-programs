// Import the database
const db = require('../db/config');

// Instantiate a new object.
// This will interface with the modern-health database.
// Specifically, the Programs table.
const Programs = {};

// Define methods for the Program object

// Returns all program from the table
Programs.findAll = () => {
  return db.query(
    `SELECT * FROM programs`
  );
};

// Return one program with the specific id
Programs.findById = (id) => {
  return db.oneOrNone(
    `
      SELECT * FROM programs
      WHERE id = $1
    `,
    [id]
  );
};

// Export the Programs object
module.exports = Programs;