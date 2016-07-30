/**
 * Word.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  dictionary: [],

  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
***REMOVED***,
    value: {
      type: 'string',
      required: true
***REMOVED***,
    translations: {
      collection: 'translation',
      via: 'term'
***REMOVED***,
    author: {
      type: 'integer',
      required: true
***REMOVED***,
    languageCode: {
      type: 'string'
***REMOVED***
***REMOVED***
***REMOVED***
