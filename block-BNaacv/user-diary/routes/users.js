const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  let users = ['mark', 'tony', 'bucky'];
  res.render('users', { users });
});

router.get('/new', (req, res) => {
  res.render('userForm');
});

router.get('/:id', (req, res) => {
  let id = req.params.id;
  let user = { name: 'Emily', email: 'emily@gmail.com', age: 17 };
  res.render('singleUser', { user });
});

router.post('/', (req, res) => {
  let userData = req.body;
  res.send(`User ${userData.name} has been saved.`);
});

router.delete('/:id', (req, res) => {
  let id = req.params.id;
  res.send('User has been deleted');
});

router.put('/:id', (req, res) => {
  let id = req.params.id;
  res.send('User details have been updated');
});

module.exports = router;
