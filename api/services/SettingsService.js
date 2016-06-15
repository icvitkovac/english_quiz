"use strict";
module.exports = {


  update: function (userId, reqObject, errorCb, successCb) {

    Settings.update({userId: userId}, reqObject)
      .exec(function (err, data) {
        if (err) errorCb(err);
        successCb(data);
  ***REMOVED***);


***REMOVED***,
  init: function (userId, errorCb, successCb) {

    Settings.findOrCreate({userId: userId}, {
      userId: userId,
      questionsNumber: 5,
      practiceMode: true,
      onlyHard: false
***REMOVED***)
      .exec(function (err, data) {
        if (err) errorCb(err);
        if (data.length) data = data[0];
        successCb(data);
  ***REMOVED***);

***REMOVED***
***REMOVED***
