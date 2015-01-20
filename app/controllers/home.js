var mongoose = require('mongoose');
var User = mongoose.model('User');
var Token = mongoose.model('Token');
var utils = require('../../library/utils');
var md5 = require('MD5');
var randomToken = require('rand-token');

exports.index = function (req, res) {
    res.json({
        "version": "1.0"
    });
};

exports.auth = function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    //
    User.findOne({ "username" : username, "password" : md5(password) }, function(err, o) {
        if(err) {
            res.send(404, {
                "status"    :   "error",
                "message"   :   "incorrect username or password"
            });
        } else {
            var generatedToken = randomToken.generate(32);
            o.tokens.push(new Token({ token : generatedToken }));
            //
            o.save(function (err, o) {
                if(err) {
                    res.send(500, {
                        "status"    :   "error",
                        "message"   :   err.message
                    });
                } else {
                    res.send(200, {
                        "status"    :   "success",
                        "message"   :   "ok",
                        "data"      :   generatedToken
                    });
                }
            });
        }
    });
};

exports.register = function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    //
    if(typeof username === "undefined" || typeof password === "undefined") {
        res.send(500, {
            "status"    :   "error",
            "message"   :   "we need username and password"
        });
    }
    //
    utils.checkUsername(username, function(o) {
        if(o !== false) {
            res.send(500, {
                "status"    :   "error",
                "message"   :   "username not valid"
            });
        } else {
            var user = new User();
            user.username = username;
            user.password = md5(password);
            //
            user.save(function (err, o) {
                if(err) {
                    res.send(500, {
                        "status"    :   "error",
                        "message"   :   err.message
                    });
                } else {
                    res.send(200, {
                        "status"    :   "success",
                        "message"   :   "ok"
                    });
                }
            });
        }
    });
};