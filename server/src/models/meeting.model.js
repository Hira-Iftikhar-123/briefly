const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    summary: { type: String, default: '' },
    participants: [{ type: String, trim: true }],
    notes: { type: String, default: '' },
    tasksGenerated: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  },
  { timestamps: true },
);

const Meeting = mongoose.model('Meeting', meetingSchema, 'Meetings');

module.exports = { Meeting };
