const express = require('express');
const { login, register } = require('../controllers/authController.js');

const router = express.Router();

// @route   POST api/auth/register
// @des     Create a user
// @access  Public
router.post('/register', register);

// @route   POST api/auth/login
// @des     Log in a user
// @access  Public
router.post('/login', login);

module.exports = router;

