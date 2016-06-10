var passport = require('passport'),
  FacebookStrategy = require('passport-facebook'),
  express = require('express');


module.exports.http = {
  customMiddleware: function (app) {
    //serve frontend js files from node_modules dir (angular 2)
    app.use('/node_modules', express.static(process.cwd() + '/node_modules'));


    //passport fb authentication
    passport.use(new FacebookStrategy({
        clientID: '566624130177759',
        clientSecret: '4400b12009fc53fed297653a30e0a99b',
        callbackURL: "http://localhost:1234/auth/facebook/callback"
        // callbackURL: "http://localhost:1234/main"
      },
      function (accessToken, refreshToken, profile, cb) {

        User.findOrCreate({facebookId: profile.id}, {
          facebookId: profile.id,
          name: profile.displayName
        }).exec(function (err, user) {
          return cb(err, user);
        });

      }
    ));

  }
};

