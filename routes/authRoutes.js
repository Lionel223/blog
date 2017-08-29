const passport = require('passport');

module.exports = (app) => {
    app.get(
        '/login',
        // passport.authenticate('local', {
        //     successRedirect: '/success',
        //     failureRedirect: '/fail',
        // }),
        passport.authenticate('local'),
        (req, res) => {
            res.send('User ID: ' + req.user);
            // res.send({hi:'asdf'});
        }
    );
    app.get('/api/current_user', (req, res) => {
        console.log(req.user);
        res.send(req.session);
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
        // res.redirect('/');
    });

    // app.get('/', (req, res) => {
    //     res.send({ hi: 'asdf' });
    // })
}