***REMOVED***
/* globals Notification, ReportedTranslations */
module.exports = {
  addLazy: function(userId, code, errCb, successCb) {
    Notification.create({userId, code})
            .exec((err, notificationData) => {
              if (err) return errCb(err);
              return successCb(notificationData);
        ***REMOVED***);
***REMOVED***,
  get: function(userId, errCb, successCb) {
    Notification.find({userId})
            .then(notificationData => {
              if (notificationData.length) {
                ReportedTranslations.find()
                        .populate('reportedWord')
                        .populate('reporter')
                        .then(data => {
                          data = data.filter(item => item.reportedWord.author === userId);
                          return successCb(data);
                    ***REMOVED***)
                        .catch(err => {
                          return errCb(err);
                    ***REMOVED***);
          ***REMOVED***
                return successCb(notificationData);
          ***REMOVED***
        ***REMOVED***)
            .catch(err => {
              return errCb(err);
        ***REMOVED***);
***REMOVED***
***REMOVED***
