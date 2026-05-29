const express = require('express');
const { authRoutes } = require('./auth.routes');
const { meetingsRoutes } = require('./meetings.routes');
const { tasksRoutes } = require('./tasks.routes');
const { aiRoutes } = require('./ai.routes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/meetings', meetingsRoutes);
router.use('/tasks', tasksRoutes);
router.use('/ai', aiRoutes);

module.exports = { apiRoutes: router };
