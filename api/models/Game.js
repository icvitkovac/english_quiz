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
***REMOVED***,
    gamePoints: {
      type: 'float',
      defaultsTo: 0
***REMOVED***,
    contenderId: {
      model: 'user'
***REMOVED***,
    gameType: {
      model: 'GameTypes',
      defaultsTo: 1
***REMOVED***,
    active: {
      type: 'boolean',
      defaultsTo: true
***REMOVED***,
    practiceMode: {
      type: 'boolean',
      defaultsTo: false
***REMOVED***,
    breakdown: {
      collection: 'GameBreakdown',
      via: 'gameId'
***REMOVED***
***REMOVED***
***REMOVED***
