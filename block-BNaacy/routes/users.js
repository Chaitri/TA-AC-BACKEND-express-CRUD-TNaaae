const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/new', (req, res) => {
  res.render('userForm');
});

router.post('/', (req, res) => {
  let userData = req.body;
  console.log(req.body);
  User.create(userData, (err, insertedUser) => {
    if (err) res.redirect('/users/new');
    res.redirect('/');
  });
});

module.exports = router;
