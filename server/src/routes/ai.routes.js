const express = require('express');
const { chat, extractTasks, summarize } = require('../controllers/ai.controller');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

router.use(requireAuth);
router.post('/summarize', summarize);
router.post('/extract-tasks', extractTasks);
router.post('/chat', chat);

module.exports = { aiRoutes: router };
