module.exports = {
  homepage: function(req, res) {
    res.view('homepage', {me: req.session.user});
***REMOVED***
***REMOVED***
