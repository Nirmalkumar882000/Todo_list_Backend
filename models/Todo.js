// backend/models/Todo.js

const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    status: { type: String, enum: ['todo', 'in-progress', 'completed'], default: 'todo' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Todo', todoSchema);
