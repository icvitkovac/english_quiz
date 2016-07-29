/**
 * WordController
 *
 * @description :: Something

 */
/* globals WordService */
'use strict';

module.exports = {

  create: function(req, res) {
    var reqObj = req.body;
    var translations = [];

    for (let value of reqObj.translations) {
      translations.push({value: value});
    }
    translations[0].isAnswer = true;

    WordService.create(
      reqObj.value,
      req.session.user,
      translations,
      err => res.badRequest(err),
      wordData => {
        if (typeof wordData === 'number') {
          res.status(wordData);
          return res.send({message: 'Word already exists'});
        }
        return res.json(wordData);
      }
    );
  },

  count: function(req, res) {
    WordService.count(req.session, err => res.badRequest(err), count => res.json(count));
  },

  search: function(req, res) {
    WordService.search(req.query.value, req.session.user.id, err => res.badRequest(err), searchData => res.json(searchData));
  },

  update: function(req, res) {
    WordService.update(req.body, err => res.badRequest(err), data => res.json(data));
  }

};

