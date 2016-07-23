/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  callback: function(req, res, profile) {
    console.log(profile);
    res.ok();
  }

};

