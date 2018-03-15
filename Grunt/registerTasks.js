module.exports = function (grunt) {

  require('./build/registerTasks.js')(grunt);

  grunt.registerTask('default', ['buildProd']);
};