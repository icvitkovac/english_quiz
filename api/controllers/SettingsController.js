/**
 * SettingsController
 *
 * @description :: Server-side logic for managing settings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

"use strict";
module.exports = {

  handle: function (req, res) {
    var reqObj = req.body;
    reqObj.questionsNumber = parseInt(reqObj.questionsNumber);

    SettingsService.update(req.session.user.id, reqObj, function (err) {
      res.badRequest(err);

***REMOVED***, function (data) {
      req.session.settings = data[0];
      return res.json(data[0]);

***REMOVED***);

***REMOVED***,

  find: function (req, res) {

    SettingsService.init(req.session.user.id, function (err) {
      res.badRequest(err);

***REMOVED***, function (data) {
      req.session.settings = data;
      return res.json(data);

***REMOVED***);

***REMOVED***
***REMOVED***

