/**
 * Game.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    gamePoints: {
      type: 'float',
      defaultsTo: 0
    },
    contenderId: {
      model: 'user'
    },
    gameType: {
      model: 'GameTypes',
      defaultsTo: 1
    },
    active: {
      type: 'boolean',
      defaultsTo: true
    },
    practiceMode: {
      type: 'boolean',
      defaultsTo: false
    },
    breakdown: {
      collection: 'GameBreakdown',
      via: 'gameId'
    }
  }
};
