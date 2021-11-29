const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

router.get('/', function(req, res, next) {
  if (req.cookies.username) {
    res.render('index', { title: 'Beat Buddy', username: req.cookies.username, admin: req.cookies.admin === 'true' });
  }
  else {
    res.render('index', { title: 'Beat Buddy' });
  }
});

router.get('/users', async function(req, res, next) {
  if (req.cookies.username) {
    const searchValue = req.query.search;
    const searchedUsers = [];
    if (searchValue) {
      const users = await User.find();
      for (const user of users) {
        if (user.username.includes(searchValue)) {
          searchedUsers.push(user);
        }
      };
    }
    res.render('users', { title: 'Search Users', username: req.cookies.username, admin: req.cookies.admin === 'true', searchedUsers: searchedUsers });
  }
  else {
    res.redirect('/');
  }
});

router.get('/profile', function(req, res, next) {
  if (req.cookies.username) {
    res.render('profile', { title: 'My Profile', username: req.cookies.username, admin: req.cookies.admin === 'true' });
  }
  else {
    res.redirect('/');
  }
});

router.get('/signup', function(req, res, next) {
  if (!req.cookies.username) {
    res.render('signup', { title: 'Sign Up' });
  }
  else {
    res.redirect('/');
  }
});

router.get('/signin', function(req, res, next) {
  if (!req.cookies.username) {
    res.render('signin', { title: 'Sign In' });
  }
  else {
    res.redirect('/');
  }
});

module.exports = router;