const passport = require('passport');

module.exports = (app) => {
    app.post(
        '/api/login',
        passport.authenticate('local'),(req, res) => {
            res.json({redirectURI: "/"}) 
            // res.redirect('/');
        }

        // passport.authenticate('local')

        // passport.authenticate('local', {
        //     successRedirect: '/success',
        //     failureRedirect: '/fail',
        // })
    );
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/about');
    });
}