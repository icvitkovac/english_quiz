/**
 * Word.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  dictionary: [],

  attributes: {

    value: {
      type: 'string',
      required: true
***REMOVED***,
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
***REMOVED***,
    translations: {
      collection: 'translation',
      via: 'term'
***REMOVED***,
    isHard: {
      type: 'boolean',
      required: false,
      defaultsTo: false
***REMOVED***,
    author: 'integer'

***REMOVED***
***REMOVED***

