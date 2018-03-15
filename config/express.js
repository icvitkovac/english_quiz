'use strict';
/* global sails, User */
var passport = require('passport');
var FacebookStrategy = require('passport-facebook');
var env = process.env.NODE_ENV || 'dev';

module.exports.http = {
  customMiddleware: function(app) {
    var fbStrategyConfig = {};

    // pick dev or prod fb app
    if (env === 'dev') {
      fbStrategyConfig = {
        clientID: '579029875603851',
        clientSecret: process.env.FB_SECRET,
        callbackURL: `http://localhost:${sails.config.port}/auth/facebook/callback`,
        profileFields: ['id', 'first_name', 'last_name', 'gender', 'picture', 'locale']

      };
    } else {
      fbStrategyConfig = {
        clientID: '566624130177759',
        clientSecret: process.env.FB_SECRET,
        callbackURL: '/auth/facebook/callback',
        profileFields: ['id', 'first_name', 'last_name', 'gender', 'picture', 'locale']
      };
    }

    // passport fb authentication
    passport.use(new FacebookStrategy(fbStrategyConfig,
      function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({facebookId: profile.id}, {
          facebookId: profile.id,
          name: `${profile._json.first_name}  ${profile._json.last_name}`,
          locale: profile._json.locale,
          pictureUrl: profile._json.picture.data.url
        }).exec(function(err, user) {
          return cb(err, user);
        });
      }
    ));
  }
};

