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

Section.findNumSections = (program_id) => {
	return db.oneOrNone(
		`SELECT COUNT(*) FROM sections
		WHERE program_id = $1`,
		[program_id]
	);
};

// Return one quote with the specific id
Section.findByProgramOrder = (program_id, order_idx) => {
	return db.oneOrNone(
		`SELECT * FROM sections
		WHERE program_id = $1 AND order_idx = $2`,
		[program_id, order_idx]
	);
};

// Export the Section object
module.exports = Section;