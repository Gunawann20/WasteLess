const express = require('express');
const { check } = require('express-validator');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/register', [
  check('name').notEmpty(),
  check('gender').notEmpty(),
  check('address').notEmpty(),
  check('email').isEmail(),
  check('password').isLength({ min: 6 }),
], authController.register);

router.post('/login', [
  check('email').isEmail(),
  check('password').notEmpty(),
], authController.login);

router.post('/logout', authController.logout);

module.exports = router;
