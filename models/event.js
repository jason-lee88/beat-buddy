const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
     "eventID": { type: String, required: true, unique: true },
     "name": { type: String },
     "date": { type: String },
     "time": { type: String },
     "addressName": { type: String },
     "address": { type: String },
     "interest": [{ type: String }]
});

module.exports = mongoose.model('Event', eventSchema);