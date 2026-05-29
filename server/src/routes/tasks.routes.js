const express = require('express');
const { createTask, listTasks, updateTask } = require('../controllers/tasks.controller');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

router.use(requireAuth);
router.post('/', createTask);
router.get('/', listTasks);
router.put('/:id', updateTask);

module.exports = { tasksRoutes: router };
