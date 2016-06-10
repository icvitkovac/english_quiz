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
    },
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    practiceMode: {
      type: 'boolean',
      defaultsTo: true
    },
    only_hard: {
      type: 'boolean',
      defaultsTo: false,
      required: false
    },
    userid:{
      model: 'user'
    }

  }
};

