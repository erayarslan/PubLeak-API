var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ImageSchema = new Schema({
    filename    : String,
    date        : { type: Date, default: Date.now }
});

mongoose.model('Image', ImageSchema);

module.exports = ImageSchema;