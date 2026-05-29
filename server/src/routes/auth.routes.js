const express = require('express');
const { login, profile, register } = require('../controllers/auth.controller');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', requireAuth, profile);

module.exports = { authRoutes: router };
