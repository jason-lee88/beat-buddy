const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
     "username": { type: String, required: true, unique: true },
     "passhash": { type: String, required: true },
     "email": { type: String },
     "instagram": { type: String },
     "snapchat": { type: String },
     "admin": { type: Boolean, required: true }
});

module.exports = mongoose.model('User', userSchema);
