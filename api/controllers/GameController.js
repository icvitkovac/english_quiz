/**
 * GameController
 *
 * @description :: Something

 */

'use strict';

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
    }
  );

}

function _gameOver(req, res) {
  GameService.over(req.session.game.id, req.session.game.gamePoints,
    err => res.badRequest(err),
    gameData => {
      req.session.game = {};
      res.json({
        isStarted: false,
        points: gameData[0].gamePoints
      });
    });

}

/*
 *@PUBLIC
 */

module.exports = {

  next: function (req, res) {

    _findRandomWord(req, res);
  },


  on: function (req, res) {

    if (!req.session.game || !req.session.game.id) {

      SettingsService.init(
        req.session.user.id,
        err => res.badRequest(err),
        settings => {
          GameService.on(req.session.user.id,
            err => res.badRequest(err),
            gameData => {
              req.session.game = gameData;
              req.session.game.practiceMode = settings.practiceMode;
              req.session.game.askedWordsCount = 0;
              res.json({
                isStarted: gameData.active,
                points: gameData.gamePoints
              });
            });

        });


    }

    else {
      _gameOver(req, res);

    }
  },

  highscores: function (req, res) {

    GameService.highScores(err => res.badRequest(err), highScores => res.json(highScores));

  },

  history: function (req, res) {

    GameService.history(req.session.user.id, err => res.badRequest(err), history => res.json(history));

  },

  breakdown: function (req, res) {

    GameService.breakdown(req.query.gameId, err => res.badRequest(err), breakdown => res.json(breakdown));

  },

  status: function (req, res) {

    res.json({isStarted: req.session.game && req.session.game.active});

  },

  checkAnswer: function (req, res) {
    let translationId = req.param('translationId');

    GameService.checkAnswer(
      translationId,
      req.session.game.id,
      err => res.badRequest(err),
      data => {
        if (data.isAnswer) {
          req.session.game.gamePoints += 1;
          //sending new word
          _findRandomWord(req, res, {
            points: req.session.game.gamePoints,
            isAnswer: true
          });
        }

        else {
          req.session.game.gamePoints ? req.session.game.gamePoints -= 0.5 : 0;

          if (req.session.game.practiceMode === false) {
            _gameOver(req, res);
          }
          else {
            res.json({
              points: req.session.game.gamePoints,
              isAnswer: false
            });
          }
        }

      }
    );

  }

};

