const { Task } = require('../models/task.model');
const { created, success } = require('../utils/api-response');

async function createTask(req, res) {
  const task = await Task.create(req.body);
  return created(res, task);
}

async function listTasks(req, res) {
  const tasks = await Task.find().sort({ createdAt: -1 });
  return success(res, tasks);
}

async function updateTask(req, res) {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  return success(res, task);
}

module.exports = { createTask, listTasks, updateTask };
