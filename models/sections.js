// Import the database
const db = require('../db/config');

// Instantiate a new object.
const Section = {};

// Returns all program from the table
Section.findAll = () => {
	return db.query(
		`SELECT * FROM sections`
	);
};

// Return one quote with the specific id
Section.findById = (id) => {
	return db.oneOrNone(
		`SELECT * FROM sections
		WHERE id = $1`,
		[id]
	);
};

// Export the Section object
module.exports = Section;