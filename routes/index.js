const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Beat Buddy', username: 'JuiceSpoon'});
});

router.get('/users', function(req, res, next) {
  res.render('users', { title: 'Search Users', username: 'JuiceSpoon'});
});

router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'My Profile', username: 'JuiceSpoon'})
});

module.exports = router;