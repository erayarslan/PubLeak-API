module.exports = function (app) {
    var utils = require('../library/utils');

    var home = require('../app/controllers/home');
    var image = require('../app/controllers/image');
    var vote = require('../app/controllers/vote');

    app.get('/', home.index);
    app.post('/auth', home.auth);
    app.post('/register', home.register);
    app.post('/images', utils.secure, image.saveImage);
    app.get('/images', utils.secure, image.getImages);
    app.get('/images/:id', utils.secure, image.getImageById);
    app.delete('/images/:id', utils.secure, image.deleteImageById);
    app.post('/votes', utils.secure, vote.saveVote);
};
