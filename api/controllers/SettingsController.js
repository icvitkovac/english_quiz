/**
 * SettingsController
 *
 * @description :: Server-side logic for managing settings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  handle: function (req, res) {
    var reqObj = req.body;
    reqObj.questionsNumber = parseInt(reqObj.questionsNumber);


    Settings.update({userId: req.session.user.id}, reqObj)
      .exec(function (err, data) {
        if (err) res.badRequest(err);
        return res.json(data[0]);
  ***REMOVED***);
***REMOVED***,

  find: function (req, res) {

    Settings.findOrCreate({userId: req.session.user.id}, {
      userId: req.session.user.id,
      questionsNumber: 5,
      practiceMode: true,
      onlyHard: false
***REMOVED***)
      .exec(function (err, data) {
        if (err) res.badRequest(err);
        return res.json(data);
  ***REMOVED***);

***REMOVED***

***REMOVED***

