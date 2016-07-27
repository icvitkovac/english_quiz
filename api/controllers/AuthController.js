***REMOVED***
/* globals NotificationService */
// import * as notificationCodes from 'assets/constants/constants.js';

module.exports = {
  facebook: function(req, res) {
    passport.authenticate('facebook', function(err, user) {
      if ((err) || (!user)) {
        return res.send({message: 'login failed'});
  ***REMOVED***

      req.session.authenticated = true;
      req.session.user = user;

      if (user.locale === null || user.locale.startsWith('en')) {
        NotificationService.addLazy(user.id,
          // notificationCodes.changeLanguage,
          'changeLanguage',
          err => console.error(err),
          data => res.redirect('/pick')
        );
  ***REMOVED***
        return res.redirect('/pick');
  ***REMOVED***
***REMOVED***)(req, res);
***REMOVED***,
  login: function(req, res) {
    res.view();
***REMOVED***,
  logout: function(req, res) {
    req.session.authenticated = false;
    req.logout();
    res.redirect('/login');
***REMOVED***
***REMOVED***
