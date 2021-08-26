const express = require('express');
const router = express.Router();

router.get('/new', (req, res) => {
  res.render('createStudent');
});

router.post('/', (req, res) => {
  let studentData = req.body;
  res.json(studentData);
});

router.get('/', (req, res) => {
  let students = ['mark', 'sunidhi', 'leo', 'jackie'];
  res.render('displayAllStudents', { students });
});

router.get('/:id', (req, res) => {
  let id = req.params.id;
  let student = { name: 'rahul', email: 'rahul@altcampus.io', age: 18 };
  res.render('displayStudent', { student });
});

module.exports = router;
