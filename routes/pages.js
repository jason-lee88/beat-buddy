const express = require('express');
const https = require('https');
const User = require('../models/user.js');
const Event = require('../models/event.js');
const router = express.Router();

router.get('/', async function (req, res, next) {
  if (req.cookies.username) {
    const searchValue = req.query.search;
    if (searchValue) {
      https.get('https://app.ticketmaster.com/discovery/v2/events.json?apikey=bkL6GOFGm6Zp4ZVhItcGnwC8j6HPxyoq&countryCode=US&keyword=' + searchValue, eventRes => {
        eventRes.setEncoding('utf8');
        let rawData = '';
        eventRes.on('data', chunk => {
          rawData += chunk;
        });
        eventRes.on('end', async () => {
          let searchedEvents = [];
          const eventsData = JSON.parse(rawData);
          if (eventsData._embedded && eventsData._embedded.events) {
            const events = eventsData._embedded.events;
            await Promise.all(events.map(event => {
              console.log(event._embedded.venues[0]);
              const eventID = event.id;
              const eventName = event.name;
              const eventDate = event.dates.start.localDate;
              const eventTime = event.dates.start.localTime;
              const addressName = event._embedded.venues[0].name;
              const addressRoad = event._embedded.venues[0].address?.line1 ?? "Address";
              const addressCity = event._embedded.venues[0].city?.name ?? "City";
              const addressState = event._embedded.venues[0].state?.stateCode ?? "State";
              const addressZip = event._embedded.venues[0].postalCode ?? "Zip";

              searchedEvents.push({
                "eventID": eventID,
                "eventName": eventName,
                "eventDate": eventDate,
                "eventTime": eventTime,
                "addressName": addressName,
                "addressRoad": addressRoad,
                "addressCity": addressCity,
                "addressState": addressState,
                "addressZip": addressZip
              });
            }));
          }

          res.render('index', { title: 'Beat Buddy', username: req.cookies.username, admin: req.cookies.admin === 'true', searchedEvents: searchedEvents });
        });
      });
    }
    else {
      res.render('index', { title: 'Beat Buddy', username: req.cookies.username, admin: req.cookies.admin === 'true', searchedEvents: [] });
    }
  }
  else {
    res.render('index', { title: 'Beat Buddy' });
  }
});

router.get('/event/:eventID', async function (req, res, next) {
  const event = await Event.findOne({ eventID: req.params.eventID });
  res.render('event', { title: "Who's Interested?", username: req.cookies.username, admin: req.cookies.admin === 'true', event: event });
});

router.get('/users', async function (req, res, next) {
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

router.get('/profile', async function (req, res, next) {
  if (req.cookies.username) {
    const user = await User.findOne({ username: req.cookies.username });
    let email = "";
    let instagram = "";
    let snapchat = "";
    if (user) {
      email = user.email;
      instagram = user.instagram;
      snapchat = user.snapchat;
    }
    res.render('profile', { title: 'My Profile', username: req.cookies.username, admin: req.cookies.admin === 'true', email: email, instagram: instagram, snapchat: snapchat });
  }
  else {
    res.redirect('/');
  }
});

router.get('/signup', function (req, res, next) {
  if (!req.cookies.username) {
    res.render('signup', { title: 'Sign Up' });
  }
  else {
    res.redirect('/');
  }
});

router.get('/signin', function (req, res, next) {
  if (!req.cookies.username) {
    res.render('signin', { title: 'Sign In' });
  }
  else {
    res.redirect('/');
  }
});

module.exports = router;