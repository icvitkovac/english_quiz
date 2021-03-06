'use strict';
/* globals User */
module.exports = {

  update: function(userId, updateObj, errCb, successCb) {
    User.update(userId, updateObj)
            .exec((err, userData) => {
              if (err) return errCb(err);
              return successCb(userData);
            });
  },
  setLocale: function(userId, locale, errCb, successCb) {
    User.update(userId, {locale})
            .exec((err, userData) => {
              if (err) return errCb(err);
              return successCb(userData);
            });
  }
};
