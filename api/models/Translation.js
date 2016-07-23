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
    },
    value: {
      type: 'string',
      required: true
    },
    id: {
      type: 'integer',
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    isAnswer: {
      type: 'boolean',
      defaultsTo: 'false'
    }
  }
};

