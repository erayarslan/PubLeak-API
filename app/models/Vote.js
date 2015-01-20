var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VoteSchema = new Schema({
    image   : { type: Schema.Types.ObjectId, ref: 'Image' }
});

mongoose.model('Vote', VoteSchema);

module.exports = VoteSchema;