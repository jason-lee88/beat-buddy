const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Beat Buddy', usernam: 'JsonDerulo'});
});

router.get('/users', function(req, res, next) {
  res.render('users', { title: 'Search Users', usernam: 'Admin', admin: true});
});

router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'My Profile', usernam: 'JsonDerulo'})
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Create an Account' })
});

router.get('/signin', function(req, res, next) {
  res.render('signin', { title: 'Sign In' })
});

module.exports = router;