"use strict";

var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
  "name": {
    type: String,
    required: true
  },
  "date": {
    type: Date
  },
  "time": {
    type: Date
  },
  "addressName": {
    type: String
  },
  "road": {
    type: String
  },
  "city": {
    type: String
  },
  "state": {
    type: String
  },
  "country": {
    type: String
  }
});
module.exports = mongoose.model('Event', eventSchema);