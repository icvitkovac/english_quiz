"use strict";
/* globals Settings */
module.exports = {

  update: function(userId, reqObject, errorCb, successCb) {
    Settings.update({userId}, reqObject)
      .exec(function(err, data) {
        if (err) return errorCb(err);
        return successCb(data);
      });
  },
  init: function(userId, errorCb, successCb) {
    Settings.findOrCreate({userId}, {userId, practiceMode: false})
      .exec(function(err, data) {
        if (err) return errorCb(err);
        if (data.length) data = data[0];
        return successCb(data);
      });
  }
};
