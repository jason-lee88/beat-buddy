const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
     "eventID": { type: String },
     "name": { type: String, required: true},
     "date": { type: Date },
     "time": { type: Date },
     "addressName": { type: String },
     "road": { type: String },
     "city": { type: String },
     "state": { type: String },
     "zip": { type: String },
     "interest": [{ type: String }]
});

module.exports = mongoose.model('Event', eventSchema);