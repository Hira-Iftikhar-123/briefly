const { success } = require('../utils/api-response');
const { summarizeMeeting } = require('../ai/gemini.client');

async function summarize(req, res) {
  const result = await summarizeMeeting(req.body?.notes || '');
  return success(res, result);
}

async function extractTasks(req, res) {
  const result = await summarizeMeeting(req.body?.notes || '');
  return success(res, { tasks: result.actionItems });
}

async function chat(req, res) {
  return success(res, { reply: 'AI chat placeholder response.' });
}

module.exports = { summarize, extractTasks, chat };
