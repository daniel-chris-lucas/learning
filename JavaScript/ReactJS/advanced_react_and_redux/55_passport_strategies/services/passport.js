const passport = require('passport');
const User = require('../models/User');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// Setup options for JWT strategies
const jwtOptions = {};

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
    // See if the user ID in the payload exists in our database
    // If it does call 'done' with that user,
    // Otherwise call done without a user object
    User.findBy(payload.sub, function (err, user) {
        if (err) { return done(err, false); }

        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});

// Tell passport to use this strategy
