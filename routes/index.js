const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Beat Buddy', username: 'JsonDerulo'});
});

router.get('/users', function(req, res, next) {
  res.render('users', { title: 'Search Users', username: 'JsonDerulo'});
});

router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'My Profile', username: 'JsonDerulo'})
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Create an Account' })
});

router.get('/signin', function(req, res, next) {
  res.render('signin', { title: 'Sign In' })
});

module.exports = router;