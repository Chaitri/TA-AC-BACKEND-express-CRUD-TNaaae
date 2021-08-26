const express = require('express');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index');
const studentRouter = require('./routes/students');

mongoose.connect('mongodb://127.0.0.1:27017/school', (err) => {
  console.log(err ? err : 'Connected to database');
});

const app = express();

// middleware
app.use(express.json());

// views
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// routes
app.use('/', indexRouter);
app.use('/students', studentRouter);

// error handler
app.use((req, res, next) => {
  res.send('Page Not Found');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
