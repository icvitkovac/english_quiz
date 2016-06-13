/**
 * Settings.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

    questionsNumber: {
      type: 'int',
      defaultsTo: 3
***REMOVED***,
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
***REMOVED***,
    practiceMode: {
      type: 'boolean',
      defaultsTo: true
***REMOVED***,
    onlyHard: {
      type: 'boolean',
      defaultsTo: false,
      required: false
***REMOVED***,
    userId:{
      model: 'user'
***REMOVED***

***REMOVED***
***REMOVED***

