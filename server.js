// main entry
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// DataBase
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
