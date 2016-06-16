/**
 * GameController
 *
 * @description :: Something

 */

***REMOVED***

/*
 *@private
 */


function _findRandomWord(req, res, gameData) {


  GameService.findRandomWord(
    req.session.wordCount,
    req.session.user.id,
    gameData,
    err => res.badRequest(err),
    data => {
      req.session.game.askedWordsCount += 1;
      res.json(data);
***REMOVED***
  );

}

function _gameOver(req, res) {
  GameService.over(req.session.game.id, req.session.game.gamePoints,
    err => res.badRequest(err),
    gameData => {
      console.log(gameData);
      req.session.game = {***REMOVED***
      res.json({
        isStarted: false,
        points: gameData[0].gamePoints
  ***REMOVED***);
***REMOVED***);

}

/*
 *@PUBLIC
 */

module.exports = {

  next: function (req, res) {

    _findRandomWord(req, res);
***REMOVED***,


  on: function (req, res) {

    if (!req.session.game || !req.session.game.id) {

      GameService.on(req.session.user.id,
        err => res.badRequest(err),
        gameData => {
          req.session.game = gameData;
          req.session.game.askedWordsCount = 0;
          res.json({
            isStarted: gameData.active,
            points: gameData.gamePoints
      ***REMOVED***);
    ***REMOVED***);
***REMOVED***

    else {
      _gameOver(req, res);

***REMOVED***
***REMOVED***,

  highscores: function (req, res) {

    GameService.highScores(err => res.badRequest(err), highScores => res.json(highScores));

***REMOVED***,

  history: function (req, res) {

    GameService.history(req.session.user.id, err => res.badRequest(err), history => res.json(history));

***REMOVED***,

  breakdown: function (req, res) {

    GameService.breakdown(req.query.gameId, err => res.badRequest(err), breakdown => res.json(breakdown));

***REMOVED***,

  status: function (req, res) {

    res.json({isStarted: req.session.game && req.session.game.active});

***REMOVED***,

  checkAnswer: function (req, res) {
    let id = req.param('translationId');


    Translation.findOne(id).exec(function (err, data) {
      if (err) res.badRequest(err);
      _calculatePoints(data);
***REMOVED***);


    //success callback
    function _calculatePoints(data) {

      function _updateGameStats(correct) {

        Game.findOne(req.session.game.id).exec(function (err, game) {
          if (err) res.badRequest(err);

          game.breakdown.add({
            questionId: data.term,
            correct: correct
      ***REMOVED***);

          game.save(function (err) {
            if (err) console.log(err);
      ***REMOVED***);

    ***REMOVED***);

  ***REMOVED***

      if (data.isAnswer) {

        _updateGameStats(true);

        req.session.game.gamePoints += 1;
        //sending new word
        _findRandomWord(req, res, {
          points: req.session.game.gamePoints,
          isAnswer: true
    ***REMOVED***);
  ***REMOVED***

      else {

        _updateGameStats(false);

        req.session.game.gamePoints ? req.session.game.gamePoints -= 0.5 : 0;

        if (!req.session.settings) {
          SettingsService.init(req.session.user.id, err => {
            console.log(err);
      ***REMOVED***, data => {
            req.session.settings = data;

            if (!req.session.settings.practiceMode) {
              _gameOver(req, res);
        ***REMOVED***

      ***REMOVED***);
    ***REMOVED***


        else {
          if (!req.session.settings.practiceMode) {
            _gameOver(req, res);
      ***REMOVED***
          else {
            res.json({
              points: req.session.game.gamePoints,
              isAnswer: false
        ***REMOVED***);
      ***REMOVED***

    ***REMOVED***


  ***REMOVED***

***REMOVED***

***REMOVED***

***REMOVED***

