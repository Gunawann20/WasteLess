const express = require('express');
const authenticate = require('../middleware/authenticate');
const homeController = require('../controllers/homeController');

const router = express.Router();

router.get('/', authenticate, homeController.home);

module.exports = router;
