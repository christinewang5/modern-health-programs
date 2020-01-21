TRUNCATE programs, sections RESTART IDENTITY;

INSERT INTO programs(name, description) VALUES 
	(
		'Core Pillars Program', 
		'Keep Calm & Carry On'
	), 
	(
		'Leadership Development Program', 
		'Become your own BOSS!'
	), 
	(
		'Mindful Communication', 
		'Practice active listening'
	);


INSERT INTO sections(name, description, order_idx, program_id) VALUES
	-- Core Pillars
	('Mindfulness', 'dummy description 1', 1, 1), 
	('Values', 'dummy 2', 2, 1),
	('Action', 'dummy 3', 3, 1), 
	('Flexibility', 'dummy 4', 4, 1), 
	-- Leadership Development Program
	('Manage', 'dummy description 1', 1, 2), 
	('Inspire', 'dummy 2', 2, 2),
	('Invest', 'dummy 3', 3, 2), 
	-- Mindful communication
	('Active listening', 'hi', 1, 3);