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
    },
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    translations: {
      collection: 'translation',
      via: 'term'
    },
    isHard: {
      type: 'boolean',
      required: false,
      defaultsTo: false
    },
    author: 'integer'

  }
};

