const express = require('express');
const foodController = require('../controllers/foodController');

const router = express.Router();

// Route untuk mendapatkan daftar makanan yang tersedia
router.get('/foods/available', foodController.getAvailableFoodList);

module.exports = router;