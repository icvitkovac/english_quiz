/**
 * Translation.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

    term: {
      model: 'word'
***REMOVED***,
    value: {
      type: 'string',
      required: true
***REMOVED***,
    id: {
      type: 'integer',
      primaryKey: true,
      unique: true,
      autoIncrement: true
***REMOVED***,
    isAnswer: {
      type: 'boolean',
      defaultsTo: 'false'
***REMOVED***

***REMOVED***
***REMOVED***

