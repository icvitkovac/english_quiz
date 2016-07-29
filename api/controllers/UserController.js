/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  update: function(req, res) {
    let updateObj = req.params.all();
    delete updateObj.id;

    UserService.update(req.session.user.id, updateObj, err => res.badRequest(err), data => res.json(data));
  },

  setLocale: function(req, res) {
    UserService.setLocale(req.session.user.id,
       req.param('locale'),
       err => res.badRequest(err),
       data => {
         req.session.user.locale = data[0].locale;
         res.json(data[0]);
       });
  }
};

