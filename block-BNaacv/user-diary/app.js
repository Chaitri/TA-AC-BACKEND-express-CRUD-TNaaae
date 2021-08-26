const express = require('express');
const mongoose = require('mongoose');
const indexRoute = require('./routes/index');
const usersRoute = require('./routes/users');

mongoose.connect('mongodb://127.0.0.1:27017', (err) => {
  console.log(err ? err : 'Connected to database');
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// routes
app.use('/', indexRoute);
app.use('/users', usersRoute);

// error handler
app.use((req, res, next) => {
  res.status(404).send('Page Not Found');
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
