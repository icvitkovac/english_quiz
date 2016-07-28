***REMOVED***
/* globals User */
module.exports = {

  update: function(userId, updateObj, errCb, successCb) {
      User.update(userId, updateObj)
            .exec((err, userData) => {
              if (err) return errCb(err);
              return successCb(userData);
        ***REMOVED***);
***REMOVED***,
  setLocale: function(userId, locale, errCb, successCb) {
      User.update(userId, {locale})
            .exec((err, userData) => {
              if (err) return errCb(err);

              Notification.destroy({userId, code: 'changeLanguage'})
                    .exec((err, notificationData) => {
                      if (err) return errCb(err);
                      return successCb(notificationData);
                ***REMOVED***);
        ***REMOVED***);
***REMOVED***
***REMOVED***
