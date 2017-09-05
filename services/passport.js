const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const keys = require('../config/keys');

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
}, function (username, password, done) {
    userInfo = keys.users[username];
    if (userInfo == null) {
        return done(null, false, { message: 'Invalid user' });
    };
    if (userInfo.password !== password) {
        return done(null, false, { message: 'Invalid password' });
    };

    let user = {};
    user.username = userInfo.username;
    user.logined = true;
    done(null, user);
}));