"use strict";
/* globals Settings */
module.exports = {

  update: function(userId, reqObject, errorCb, successCb) {
    Settings.update({userId}, reqObject)
      .exec(function(err, data) {
        if (err) return errorCb(err);
        return successCb(data);
  ***REMOVED***);
***REMOVED***,
  init: function(userId, errorCb, successCb) {
    Settings.findOrCreate({userId}, {userId})
      .exec(function(err, data) {
        if (err) return errorCb(err);
        if (data.length) return successCb(data[0]);
  ***REMOVED***);
***REMOVED***
***REMOVED***
