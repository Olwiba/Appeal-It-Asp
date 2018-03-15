/*global require, module:false*/

module.exports = function (grunt) {
  'use strict';

  // **
  // --- Setup and generate our configuration object
  // **
  require('./Grunt/generateConfig.js')(grunt);

  // **
  // --- Load our grunt tasks
  // **
  require('./Grunt/loadTasks.js')(grunt);

  // **
  // --- Register grunt tasks
  // **
  require('./Grunt/registerTasks.js')(grunt);
};
