var mongoose = require('mongoose');
//var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    name: String,
    Email: String,
    password: String
});

var User = mongoose.model('User', userSchema);