// backend/controllers/todoController.js

const Todo = require('../models/Todo');

// Get all todos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new todo
const addTodo = async (req, res) => {
  const { title, status } = req.body;

  try {
    const newTodo = new Todo({ title, status });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a todo
const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, status } = req.body;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, status },
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Delete a todo
const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json({ message: 'Todo deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTodos, addTodo, updateTodo, deleteTodo };
