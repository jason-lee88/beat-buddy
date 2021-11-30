const express = require('express');
const router = express.Router();
const Event = require('../models/event.js');

// GET route to return a JSON listing of the specific film's content
router.get('/', async function(req, res) {

    // If having search query
    if (req.query.search) {
        console.log("the search query is " + req.query.search)
        await fetch('https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=Mm2ukG9cVIg6pnRKDvunqWDSYXwjRK1U&keyword=' + req.query.search)
        .then(response => response.json())
        .then(function(jsonData) {

            let eventName = jsonData.data.children._embedded.events[0].name;

            console.log("The event name is " + eventName);
            console.log(jsonData);
            res.send(eventName);
            //res.status(200).send();

        });
    }
    else {

    }
  });

module.exports = router;