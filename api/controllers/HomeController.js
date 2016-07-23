module.exports = {
  homepage: function(req, res) {
    return res.ok(req.session.user, 'homepage');
  }
};
