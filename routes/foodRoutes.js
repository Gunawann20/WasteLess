const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

// Endpoint /food
router.get('/food', foodController.getAllFood);

// Endpoint /food/:id
router.get('/food/:id', foodController.getFoodById);

// Endpoint /food (POST)
router.post('/food', foodController.createFood);

module.exports = router;
