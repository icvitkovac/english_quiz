module.exports = function(req, res, next) {
  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller
  let id = parseInt(req.param('id'), 10);

  if (!id || req.session.user.id === id) {
    return next();
***REMOVED***

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.forbidden();
***REMOVED***
