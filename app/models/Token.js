var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TokenSchema = new Schema({
    token   : String
});

mongoose.model('Token', TokenSchema);

module.exports = TokenSchema;