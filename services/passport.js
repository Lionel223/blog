const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const keys = require('../config/keys');

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user.logined);
});

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
}, function (username, password, done) {
    user = keys.users[username];
    if (user == null) {
        return done(null, false, { message: 'Invalid user' });
    };
    if (user.password !== password) {
        return done(null, false, { message: 'Invalid password' });
    };
    user.logined = true;
    done(null, user);
}));