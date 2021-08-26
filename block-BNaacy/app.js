const express = require('express');
const mongosse = require('mongoose');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');

mongosse.connect('mongodb://127.0.0.1:27017/app', (err) => {
  console.log(err ? err : 'Connected to database');
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//routes
app.use('/', indexRouter);
app.use('/users', userRouter);

//error handler
app.use((req, res, next) => {
  res.status(404).send('Page Not Found');
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
