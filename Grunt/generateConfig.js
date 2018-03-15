module.exports = function (grunt) {

  var configs = [
    './build/config/assets.js',
    './build/config/sass.js',
    './build/config/cacheBuster.js',
    './build/config/uglify.js',
    './build/config/watch.js'
  ];

  function mergeConfig(newConfig) {
    grunt.config.merge(newConfig);
  }

  function mergeAndIncludeConfigs(configs) {
    for (var i = 0; i < configs.length; i++) {
      var taskConfig = require(configs[i])(grunt);
      mergeConfig(taskConfig);
    }
  }

  mergeAndIncludeConfigs(configs);
};