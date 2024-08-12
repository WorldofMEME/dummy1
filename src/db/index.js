const mysql = require('mysql2'); // Use 'mysql2' for better compatibility and support
require('dotenv').config(); // Load environment variables from .env file

// Establish connection to the database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT || 3306, // Use the port from env or default to 3306
});

// Establish connection to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL database as ID', connection.threadId);
});

module.exports = connection;
