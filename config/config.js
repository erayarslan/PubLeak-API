var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var constants = require('./constants');
var env = constants.mode;

var config = {
    production: {
        root: rootPath,
        app: {
            name: constants.name
        },
        port: constants.port,
        db: constants.db
    }
};

module.exports = config[env];
