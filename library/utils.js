var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    md5 = require('MD5');

module.exports = {
    secure : function(req, res, next) {
        User.findOne({ "tokens.token": req.headers.token }, function(err, o){
            if(err) {
                res.send(500, {
                    "status"    :   "error",
                    "message"   :   err.message
                });
            } else {
                if(o === null) {
                    res.send(404, {
                        "status"    :   "error",
                        "message"   :   "token not found"
                    });
                } else {
                    req.user = o;
                    next();
                }
            }
        });
    },
    checkUsername : function(username, callback) {
        User.findOne({ username : username }, function(err, o) {
            if(err) {
                throw new Error(err);
            } else {
                if(o === null) {
                    callback(false);
                } else {
                    callback(o);
                }
            }
        });
    }
};