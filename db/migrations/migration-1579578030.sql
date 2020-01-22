-- Run the following in the terminal: 
-- `psql -d modern-health -f db/migrations/migration-1579578030.sql`

DROP TABLE IF EXISTS programs CASCADE;
DROP TABLE IF EXISTS sections CASCADE;

CREATE TABLE IF NOT EXISTS programs(
  id SERIAL PRIMARY KEY,
  name TEXT, 
  description TEXT
);

CREATE TABLE IF NOT EXISTS sections(
  id BIGSERIAL PRIMARY KEY,
  name TEXT, 
  description TEXT,
  order_idx INT,
  program_id BIGINT,
  image_url TEXT, -- link to image
  FOREIGN KEY (program_id) REFERENCES programs(id)
);

