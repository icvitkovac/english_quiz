/**
 * WordController
 *
 * @description :: Something

 */

***REMOVED***

module.exports = {


  create: function (req, res) {

    var reqObj = req.body, translations = [];

    for (let value of reqObj.translations) {
      translations.push({value: value})
***REMOVED***
    translations[0].isAnswer = true;

    WordService.create(
      reqObj.value,
      req.session.user.id,
      translations,
      err => res.badRequest(err),
      wordData => {
        if (typeof wordData === 'number') {
          res.status(wordData);
          return res.send({message: 'Word already exists'});
    ***REMOVED***
        return res.json(wordData)
  ***REMOVED***
    );
***REMOVED***,

  count: function (req, res) {

    WordService.count(req.session, err => res.badRequest(err), count => res.json(count));

***REMOVED***,

  search: function (req, res) {


    Word.find({
      value: {'startsWith': req.query.value},
      author: req.session.user.id
***REMOVED***)
      .populate('translations')
      .exec(function (err, data) {
        if (err) res.badRequest(err);
        return res.json(data);
  ***REMOVED***);
***REMOVED***,

  update: function (req, res) {
    var reqObj = req.body;
    var id = parseInt(reqObj.id);
    delete reqObj.id;

    Word.update(id, reqObj)
      .exec(function (err, data) {
        if (err) res.badRequest(err);
        return res.json(data);
  ***REMOVED***);
***REMOVED***

***REMOVED***

