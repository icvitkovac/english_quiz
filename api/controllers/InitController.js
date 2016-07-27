/**
 * InitController
 *
 * @description :: Server-side logic for managing inits
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
/* globals NotificationService */
module.exports = {
  get: function(req, res) {
    NotificationService.get(req.session.user.id,
            err => res.badRequest(err),
            notificationData => res.json(notificationData));
  }
};

