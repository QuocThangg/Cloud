var mongoose = require('mongoose');

/// --- declare MODEL "structure"
var userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


/// --- DEFINE MODEL
var User = mongoose.model('User', userSchema, "user");

/// --- EXports
module.exports = User;
