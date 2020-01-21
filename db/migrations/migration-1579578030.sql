
DROP TABLE IF EXISTS programs;
DROP TABLE IF EXISTS services;

CREATE TABLE IF NOT EXISTS programs(
  id SERIAL PRIMARY KEY,
  name TEXT, 
  description TEXT
);

CREATE TABLE IF NOT EXISTS services(
  id BIGSERIAL PRIMARY KEY,
  name TEXT, 
  description TEXT,
  order_idx INT,
  program_id BIGINT,
  FOREIGN KEY (program_id) REFERENCES programs(id)
);

-- TODO - overview image, html content