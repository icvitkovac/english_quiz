'use strict';
/* global sails, User */
var passport = require('passport'),
  FacebookStrategy = require('passport-facebook'),
  express = require('express'),
  env = process.env.NODE_ENV || 'dev';

module.exports.http = {
  customMiddleware: function(app) {
    var fbStrategyConfig = {};

    // serve frontend js files from node_modules dir (angular 2)
    app.use('/node_modules', express.static(process.cwd() + '/node_modules'));

    // pick dev or prod fb app
    if (env === 'dev') {
      fbStrategyConfig = {
        clientID: '579029875603851',
        clientSecret: '3b95ba53fa22a8ae7f304c9572f6d9a9',
        callbackURL: `http://localhost:${sails.config.port}/auth/facebook/callback`
      };
    } else {
      fbStrategyConfig = {
        clientID: '566624130177759',
        clientSecret: '4400b12009fc53fed297653a30e0a99b',
        callbackURL: "/auth/facebook/callback"
      };
    }

    // passport fb authentication
    passport.use(new FacebookStrategy(fbStrategyConfig,
      function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({facebookId: profile.id}, {
          facebookId: profile.id,
          name: profile.displayName
        }).exec(function(err, user) {
          return cb(err, user);
        });
      }
    ));
  }
};

