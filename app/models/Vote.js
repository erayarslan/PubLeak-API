var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VoteSchema = new Schema({
    image   : { type: Schema.Types.ObjectId, ref: 'Image' }
});

mongoose.model('Vote', VoteSchema);

module.exports = VoteSchema;