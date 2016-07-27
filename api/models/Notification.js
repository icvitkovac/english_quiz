/**
 * Notification.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
// var notificationCodes = require 'assets/constants/constants.js';

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
***REMOVED***,
    userId: {
      model: 'user'
***REMOVED***,
    code: {
      type: 'string',
      // enum: Object.keys(notificationCodes)
      enum: ['changeLanguage', 'reportedWord']
***REMOVED***

***REMOVED***
***REMOVED***

