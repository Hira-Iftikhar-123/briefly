const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      set(value) {
        if (value === '' || value == null) return undefined;
        return value;
      },
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
    status: {
      type: String,
      enum: ['todo', 'in_progress', 'review', 'completed'],
      default: 'todo',
    },
    dueDate: { type: Date },
  },
  { timestamps: true },
);

const Task = mongoose.model('Task', taskSchema, 'Tasks');

module.exports = { Task };
