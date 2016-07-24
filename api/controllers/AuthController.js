***REMOVED***

module.exports = {
  facebook: function(req, res) {
    passport.authenticate('facebook', function(err, user) {
      if ((err) || (!user)) {
        return res.send({message: 'login failed'});
  ***REMOVED***
      req.session.authenticated = true;
      req.session.user = user;
      res.redirect('/pick');
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
