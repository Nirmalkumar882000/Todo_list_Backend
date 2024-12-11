// backend/routes/todoRoutes.js

const express = require('express');
const {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  editTodo,
} = require('../controllers/todoController');
const router = express.Router();

router.get('/', getTodos);
router.post('/', addTodo);
router.put('/:id', updateTodo);
router.patch('/:id', editTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
