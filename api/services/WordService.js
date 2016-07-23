***REMOVED***
/* global Word, SettingsService */
module.exports = {

  create: function(value, author, translations, errCb, successCb) {
    let currentDate;
    let wordCreatedAt;

    Word.findOrCreate({value: value}, {value: value, author: author})
      .exec(function(err, wordData) {
        if (err) return errCb(err);

        if (wordData.author !== author || Date.parse(wordData.updatedAt) !== Date.parse(wordData.createdAt)) {
          return successCb(409);
    ***REMOVED***

        currentDate = new Date().getTime();
        wordCreatedAt = new Date(wordData.createdAt).getTime();

        // todo: not very scalable
        if ((currentDate - wordCreatedAt) > 3000) {
          return successCb(409);
    ***REMOVED***

        // populate child collection
        wordData.translations.add(translations);

        wordData.save(function(err) {
          if (err) return errCb(err);
          return successCb(wordData.value);
    ***REMOVED***);
  ***REMOVED***);
***REMOVED***,

  findOne: function(id, errCb, successCb) {
    Word.findOne(id)
    .populate('translations')
    .exec(function(err, WordData) {
      if (err) return errCb(err);
      return successCb(WordData.translations.filter(value => value.isAnswer)[0].value);
***REMOVED***);
***REMOVED***,

  count: function(session, errCb, successCb) {
    var query;
    var userId = session.user.id;

    /** @function */
    function _countRequest() {
      session.settings.practiceMode ? query = {author: userId} : {***REMOVED***
      Word.count(query)
        .exec(function(err, count) {
          if (err) return errCb(err);
          session.wordCount = parseInt(count, 10);
          return successCb({count: count});
    ***REMOVED***);
***REMOVED***

    if (!session.settings) {
      session.settings = {***REMOVED***
      SettingsService.init(userId,
        err => {
          return errCb(err);
    ***REMOVED***,
        settings => {
          session.settings = settings;
          if (session.settings.practiceMode) query = {author: userId***REMOVED***
          _countRequest();
    ***REMOVED***);
***REMOVED***
      _countRequest();
***REMOVED***
***REMOVED***,

  search: function(value, author, errCb, successCb) {
    Word.find({
      value: {startsWith: value},
      author: author
***REMOVED***)
      .limit(10)
      .sort('value ASC')
      .populate('translations')
      .exec(function(err, data) {
        if (err) return errCb(err);
        return successCb(data);
  ***REMOVED***);
***REMOVED***,

  update: function(reqObj, errCb, successCb) {
    var id = parseInt(reqObj.id, 10);
    delete reqObj.id;

    Word.update(id, reqObj)
      .exec(function(err, data) {
        if (err) return errCb(err);
        return successCb(data[0]);
  ***REMOVED***);
***REMOVED***
***REMOVED***
