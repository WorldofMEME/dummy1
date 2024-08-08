// server.js

const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

// Import routes
const addressRoutes = require('./src/routes/addressRoutes');
const db = require('./src/db'); // Ensure the database connection is established

const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port

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
