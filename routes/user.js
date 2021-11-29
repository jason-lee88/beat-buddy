const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

router.post('/signup', async function(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    if (!username || !password) {
        return res.send({ err: "A username or password was not provided." });
    }
    const user = await User.findOne({ username: req.body.username });
    if (user) {
        return res.send({ err: "An account with this username already exists." });
    }
    const passhash = await bcrypt.hash(password, SALT_WORK_FACTOR);
    await User.create({
        username: username,
        passhash: passhash,
        email: req.body.email,
        instagram: req.body.instagram,
        snapchat: req.body.snapchat,
        admin: false
    });
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);
    res.cookie('username', username, { expires: expirationDate });
    res.cookie('admin', false, { expires: expirationDate });
    res.redirect('/');
});

router.post('/signin', async function(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
        return res.send({ err: "Invalid login credentials. Please try again!" });
    }
    const match = await bcrypt.compare(password, user.passhash);
    if (!match) {
        return res.send({ err: "Invalid login credentials. Please try again!" });
    }
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);
    res.cookie('username', username, { expires: expirationDate });
    res.cookie('admin', user.admin, { expires: expirationDate });
    res.redirect('/');
});

router.post('/signout', async function(req, res, next) {
    res.clearCookie('username');
    res.clearCookie('admin');
    res.redirect('/');
});

module.exports = router;