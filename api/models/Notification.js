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
    },
    userId: {
      model: 'user'
    },
    code: {
      type: 'string',
      enum: ['reportedWord', 'generalNotification', 'comment']
    }

  }
};

