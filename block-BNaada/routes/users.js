const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/new', (req, res) => {
  res.render('userForm');
});

router.post('/', (req, res) => {
  let userData = req.body;
  User.create(userData, (err, insertedUser) => {
    if (err) res.redirect('/users/new');
    res.redirect('/');
  });
});

router.get('/', (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.render('allUsers', { users: users });
  });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('singleUser', { user });
  });
});

module.exports = router;