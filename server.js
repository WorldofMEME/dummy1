// server.js

const express = require('express');
const cors = require('cors');
// Import routes
const addressRoutes = require('./src/routes/addressRoutes');

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Use routes
app.use('/api', addressRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
