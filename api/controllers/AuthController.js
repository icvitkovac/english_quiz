var passport = require('passport');
module.exports = {
  facebook: function(req, res) {
    passport.authenticate('facebook', function(err, user) {
      if ((err) || (!user)) {
        return res.send({message: 'login failed'});
      }

      req.session.authenticated = true;
      req.session.user = user;

      return res.redirect('/pick');
    })(req, res);
  },
  login: function(req, res) {
    res.view();
  },
  logout: function(req, res) {
    req.session.authenticated = false;
    req.logout();
    res.redirect('/login');
  }
};
