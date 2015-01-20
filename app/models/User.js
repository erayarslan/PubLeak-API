var mongoose = require('mongoose');
    Schema = mongoose.Schema;

var ImageSchema = require("./Image");
var TokenSchema = require("./Token");
var VoteSchema = require("./Vote");

var UserSchema = new Schema({
    username    : String,
    password    : String,
    images      : [ImageSchema],
    tokens      : [TokenSchema],
    votes       : [VoteSchema]
});

mongoose.model('User', UserSchema);

module.exports = UserSchema;
