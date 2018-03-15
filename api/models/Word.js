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
    },
    value: {
      type: 'string',
      required: true
    },
    translations: {
      collection: 'translation',
      via: 'term'
    },
    author: {
      type: 'integer',
      required: true
    },
    languageCode: {
      type: 'string'
    }
  }
};
