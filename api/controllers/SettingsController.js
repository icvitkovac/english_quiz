/**
 * SettingsController
 *
 * @description :: Server-side logic for managing settings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
/* globals SettingsService */
"use strict";
module.exports = {

  handle: function(req, res) {
    var reqObj = req.body;
    if (!reqObj.questionsNumber) reqObj.questionsNumber = 5;
    reqObj.questionsNumber = parseInt(reqObj.questionsNumber, 10);

    SettingsService.update(req.session.user.id, reqObj, err => {
      res.badRequest(err);
    }, data => {
      req.session.settings = data[0];
      return res.json(data[0]);
    });
  },

  find: function(req, res) {
    SettingsService.init(req.session.user.id, err => {
      res.badRequest(err);
    }, data => {
      req.session.settings = data;
      return res.json(data);
    });
  }
};
