# Modern Health Online Learning Programs

Full-Stack Take Home Exercise 

To the run the program, do the following: 

1. Install Postgres, Node, and a package manager 
2. `createdb modern-health`

3. Load seed data
	- `psql -d modern-health -f db/migrations/migration-1579578030.sql`
	- `psql -d modern-health -f db/seeds/programs.sql`

4. `npm install` to install dependencies 

5. `npm start` to start server

6. `npm run build` to build front-end

7. Navigate to http://localhost:3000/