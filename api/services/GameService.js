module.exports = {

  on: function (contenderId, errCb, successCb) {

    Game.create({contenderId: contenderId})
      .exec(function (err, gameData) {
        if (err) errCb(err);
        successCb(gameData);
  ***REMOVED***);


***REMOVED***,
  over: function (gameId, gamePoints, errCb, successCb) {

    Game.update(gameId, {active: false, gamePoints: gamePoints})
      .exec(function (err, gameData) {
        if (err) errCb(err);
        successCb(gameData);
  ***REMOVED***);

***REMOVED***,

  findRandomWord: function () {


***REMOVED***,

  highScores: function () {

***REMOVED***,

  history: function () {

***REMOVED***,

  breakdown: function () {

***REMOVED***,

  status: function () {

***REMOVED***,

  checkAnswer: function () {

***REMOVED***
***REMOVED***
