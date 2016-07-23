/**
 * GameController
 *
 * @description :: Handles the game flows
 */

/* global GameService, WordService, SettingsService, _ */

***REMOVED***

/** @func _findRandomWord
 * @private
 * @param {object} req - request
 * @param {object} res - sails response
 * @param {object} gameData - passed Game data
 */
function _findRandomWord(req, res, gameData) {
  let authorQuery = {***REMOVED***
  if (req.session.settings.practiceMode) {
    authorQuery = {author: req.session.user.id***REMOVED***
    if (req.session.game.askedWordsCount === req.session.settings.questionsNumber) {
      _over(req, res);
      return;
***REMOVED***
***REMOVED***

  GameService.findRandomWord(
    req.session.wordCount,
    authorQuery,
    gameData,
    err => res.badRequest(err),
    wordData => {
      req.session.game.askedWordsCount += 1;
      res.json(wordData);
***REMOVED***
  );
}

/** @func _over
 * @private
 * @param {Object} req - request
 * @param {Object} res - sails response
 * @param {Number} [term] - wordId
 */
function _over(req, res, term = null) {
  GameService.over(req.session.game.id, req.session.game.gamePoints,
    err => res.badRequest(err),
    gameData => {
      req.session.game = {***REMOVED***

      let cbData = {
        isStarted: false,
        points: gameData[0].gamePoints
***REMOVED***

      if (term) {
        WordService.findOne(term,
        err => res.badRequest(err),
        wordData => {
          res.json(_.extend(cbData, {correctAnswer: wordData}));
    ***REMOVED***);
  ***REMOVED***
        res.json(cbData);
  ***REMOVED***
***REMOVED***);
}

/*
 *@PUBLIC
 */

module.exports = {

  next: function(req, res) {
    _findRandomWord(req, res);
***REMOVED***,

  on: function(req, res) {
    if (!req.session.game || !req.session.game.id) {
      SettingsService.init(
        req.session.user.id,
        err => res.badRequest(err),
        settings => {
          req.session.settings = settings;
          GameService.on({
            contenderId: req.session.user.id,
            practiceMode: req.session.settings.practiceMode,
            type: req.param('type')
      ***REMOVED***,
            err => res.badRequest(err),
            gameData => {
              req.session.game = gameData;
              req.session.game.askedWordsCount = 0;
              res.ok({});
        ***REMOVED***);
    ***REMOVED***);
***REMOVED***
      res.status(409);
      res.send('game already started');
***REMOVED***
***REMOVED***,

  over: function(req, res) {
    _over(req, res);
***REMOVED***,

  highscores: function(req, res) {
    GameService.highScores(err => res.badRequest(err), highScores => res.json(highScores));
***REMOVED***,

  history: function(req, res) {
    GameService.history(req.session.user.id, err => res.badRequest(err), history => res.json(history));
***REMOVED***,

  breakdown: function(req, res) {
    GameService.breakdown(req.query.gameId, err => res.badRequest(err), breakdown => res.json(breakdown));
***REMOVED***,

  status: function(req, res) {
    res.json({isStarted: req.session.game && req.session.game.active});
***REMOVED***,

  checkAnswer: function(req, res) {
    let translationId = req.param('translationId');

    GameService.checkAnswer(
      translationId,
      req.session.game.id,
      err => res.badRequest(err),
      data => {
        if (data.isAnswer) {
          req.session.game.gamePoints += 1;
          // sending new word
          _findRandomWord(req, res, {
            points: req.session.game.gamePoints,
            isAnswer: true
      ***REMOVED***);
    ***REMOVED***
          req.session.game.gamePoints ? req.session.game.gamePoints -= 0.5 : 0;

          if (req.session.settings.practiceMode === false) {
            _over(req, res, data.term);
      ***REMOVED***
            res.json({
              points: req.session.game.gamePoints,
              isAnswer: false
        ***REMOVED***);
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
    );
***REMOVED***,

  report: function(req, res) {
    GameService.report(
      req.param('translation'),
      req.session.user.id,
      err => res.badRequest(err),
      reportedData => res.json(reportedData));
***REMOVED***

***REMOVED***

