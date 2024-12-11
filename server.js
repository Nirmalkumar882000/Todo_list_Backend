const express = require('express');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');
require('dotenv').config();
const connectDB = require('./config/db')

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*',
  credentials: true, 
}));
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

// Connect to MongoDB


app.listen(PORT, () => {
  connectDB()
  console.log(`Server is running on port ${PORT}`);
});
