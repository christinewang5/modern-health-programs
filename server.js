const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Import Path
const path = require('path');

// Static files
app.use(express.static('build'));

// API Routes
app.use('/api/programs', require('./routes/program-routes'));

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
});

app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
});