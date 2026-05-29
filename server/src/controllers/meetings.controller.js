const { Meeting } = require('../models/meeting.model');
const { created, success } = require('../utils/api-response');

async function createMeeting(req, res) {
  const meeting = await Meeting.create(req.body);
  return created(res, meeting);
}

async function listMeetings(req, res) {
  const meetings = await Meeting.find().sort({ createdAt: -1 });
  return success(res, meetings);
}

async function getMeeting(req, res) {
  const meeting = await Meeting.findById(req.params.id);
  return success(res, meeting);
}

async function updateMeeting(req, res) {
  const meeting = await Meeting.findByIdAndUpdate(req.params.id, req.body, { new: true });
  return success(res, meeting);
}

async function deleteMeeting(req, res) {
  await Meeting.findByIdAndDelete(req.params.id);
  return success(res, null, 'Meeting deleted');
}

module.exports = { createMeeting, listMeetings, getMeeting, updateMeeting, deleteMeeting };
