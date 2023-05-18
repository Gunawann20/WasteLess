const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Endpoint /login
router.post('/login', authController.login);

// Endpoint /register
router.post('/register', authController.register);

module.exports = router;
