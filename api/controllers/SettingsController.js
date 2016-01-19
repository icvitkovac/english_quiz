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


    Settings.update(1, reqObj)
      .exec(function (err, data) {
        if (err) res.badRequest(err);
        return res.ok(data);
      });
  }

};

