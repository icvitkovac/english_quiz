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
  gameData = gameData || {};
  let randomQuestionId = Math.floor(Math.random() * (parseInt(req.session.wordCount) - 1) + 1);

  Word.find({author: req.session.user.id})
    .populate('translations')
    .exec(function (err, data) {
      if (err) res.badRequest(err);

      if (data.length) data = data[randomQuestionId - 1];
      _.extend(data, gameData);
      req.session.game.askedWordsCount += 1;

      return res.json(data);
    });
}

function _gameOver(req, res) {
  GameService.over(req.session.game.id, req.session.game.gamePoints,
    err => {
      res.badRequest(err);
    },
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

      GameService.on(req.session.user.id,
        err => {
          res.badRequest(err);
        },
        gameData => {
          req.session.game = gameData;
          req.session.game.askedWordsCount = 0;
          res.json({
            isStarted: gameData.active,
            points: gameData.gamePoints
          });
        });
    }

    else {
      _gameOver(req, res);

    }
  },

  highscores: function (req, res) {

    Game.find()
      .sort('gamePoints DESC')
      .populate('contenderId')
      .limit(10)
      .exec(function (err, highScores) {
        if (err) res.badRequest(err);

        res.json(highScores);

      });

  },

  history: function (req, res) {

    Game.find({contenderId: req.session.user.id})
      .sort('gamePoints DESC')
      .limit(10)
      .exec(function (err, history) {
        if (err) res.badRequest(err);
        res.json(history);
      });

  },

  breakdown: function (req, res) {

    GameBreakdown.find({gameId: req.query.gameId})
      .populate('questionId')
      .exec(function (err, breakdown) {
        if (err) res.badRequest(err);
        res.json(breakdown);

      });

  },

  status: function (req, res) {

    res.ok({isStarted: req.session.game && req.session.game.active});

  },

  checkAnswer: function (req, res) {
    let id = req.param('translationId');


    Translation.findOne(id).exec(function (err, data) {
      if (err) res.badRequest(err);
      _calculatePoints(data);
    });


    //success callback
    function _calculatePoints(data) {

      function _updateGameStats(correct) {

        Game.findOne(req.session.game.id).exec(function (err, game) {
          if (err) res.badRequest(err);

          game.breakdown.add({
            questionId: data.term,
            correct: correct
          });

          game.save(function (err) {
            if (err) console.log(err);
          });

        });

      }

      if (data.isAnswer) {

        _updateGameStats(true);

        req.session.game.gamePoints += 1;
        //sending new word
        _findRandomWord(req, res, {
          points: req.session.game.gamePoints,
          isAnswer: true
        });
      }

      else {

        _updateGameStats(false);

        req.session.game.gamePoints ? req.session.game.gamePoints -= 0.5 : 0;

        if (!req.session.settings) {
          SettingsService.init(req.session.user.id, err => {
            console.log(err);
          }, data => {
            req.session.settings = data;

            if (!req.session.settings.practiceMode) {
              _gameOver(req, res);
            }

          });
        }


        else {
          if (!req.session.settings.practiceMode) {
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

    }

  }

};

