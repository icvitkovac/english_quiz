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
        clientSecret: '3b95ba53fa22a8ae7f304c9572f6d9a9',
        callbackURL: `http://localhost:${sails.config.port}/auth/facebook/callback`,
        profileFields: ['id', 'first_name', 'last_name', 'gender', 'picture', 'locale']

      };
    } else {
      fbStrategyConfig = {
        clientID: '566624130177759',
        clientSecret: '4400b12009fc53fed297653a30e0a99b',
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

