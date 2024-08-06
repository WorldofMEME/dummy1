// routes/addressRoutes.js

const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');

router.get('/check-address', addressController.checkingAddress);

module.exports = router;
