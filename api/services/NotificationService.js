'use strict';
/* globals Notification */
module.exports = {
  addLazy: function(userId, code, errCb, successCb) {
    Notification.create({userId, code})
            .exec((err, notificationData) => {
              if (err) return errCb(err);
              return successCb(notificationData);
            });
  },
  get: function(userId, errCb, successCb) {
    Notification.find({userId})
      .exec((err, notificationData) => {
        if (err) return errCb(err);
        return successCb(notificationData);
      });
  }
};
