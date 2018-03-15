/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    facebookId: {
      type: 'string',
      required: true

    },
    pictureUrl: {
      type: 'string'
    },
    locale: {
      type: 'string'
    }
  }
};

