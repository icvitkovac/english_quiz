/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

/*  globals Word */
var jsonfile = require('jsonfile');

module.exports.bootstrap = function(cb) {
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)

  jsonfile.readFile('./assets/json/dictionary.json', function(err, obj) {
    if (err) return;
    for (let element of obj) {
      Word.dictionary.push(element.word);
    }
  });

  cb();
};
