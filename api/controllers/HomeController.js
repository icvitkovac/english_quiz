module.exports = {
  homepage: function(req, res) {
    console.log(req.session.user);
    res.view('homepage', {me: req.session.user});
***REMOVED***
***REMOVED***
