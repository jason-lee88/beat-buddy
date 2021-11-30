const express = require('express');
const router = express.Router();
const Event = require('../models/event.js');

router.post('/event/:eventID', async function(req, res, next) {
    const eventID = req.params.eventID;
    const event = await Event.findOne({ eventID: eventID });
    if (event) {
        interest = event.interest;
        if (interest.includes(req.cookies.username)) {
            return res.send({ err: "You're already interested in this event!" });
        }
        interest.push(req.cookies.username);
        return Event.findOneAndUpdate({ eventID: eventID }, { interest: interest });
    }
    Event.create({
        eventID: eventID,
        name: req.body.name,
        date: req.body.date,
        time: req.body.time,
        addressName: req.body.addressName,
        address: req.body.address,
        interest: [req.cookies.username]
    });
    return res.send();
});

module.exports = router;