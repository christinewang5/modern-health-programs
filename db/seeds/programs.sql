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


INSERT INTO sections(name, description, order_idx, program_id, image_url) VALUES
	-- Core Pillars
	('Mindfulness', 'dummy 1', 1, 1, 'https://www.joinmodernhealth.com/static/ludki-5301aedae1822c19b3ab5bcc960c3dd6.svg'), 
	('Values', 'dummy 2', 2, 1, 'https://www.joinmodernhealth.com/static/ill_1-04c56663fd4335a345d93040c4077077.svg'),
	('Action', 'dummy 3', 3, 1, 'https://www.joinmodernhealth.com/static/ill_3-dae8f0dfbc300f2f38c6c01980477124.svg'),
	-- Leadership Development Program
	('Manage', 'dummy 1', 1, 2, 'https://www.joinmodernhealth.com/static/marginalia-productive-work-c461018acd5d4b33cf2dcd6c5c1cd0f0.svg'), 
	('Inspire', 'dummy 2', 2, 2, 'https://www.joinmodernhealth.com/static/marginalia-welcome-e569890f6dc8a534a7ada83e67be384d.svg'),
	('Invest', 'dummy 3', 3, 2, 'https://www.joinmodernhealth.com/static/marginalia-unsubscribed-c120194a29bbff1c346d6a51a3e07bf8.svg'), 
	-- Mindful communication
	('Active listening', 'dummy 1', 1, 3, 'https://www.joinmodernhealth.com/static/marginalia-payment-processed-c86275ef711fb3e95217bb9535a105c9.svg');