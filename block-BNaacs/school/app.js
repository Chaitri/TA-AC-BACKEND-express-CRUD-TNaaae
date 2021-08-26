const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test', (err) => {
  console.log(err ? err : 'Connected to database');
});

const app = express();

// middleware
app.use(express.json());

// views
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// routes
app.get('/', (req, res) => {
  let student = { name: 'Smriti', email: 'smriti@gmail.com', age: 13 };
  res.render('index', { student });
});

// error handler

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
