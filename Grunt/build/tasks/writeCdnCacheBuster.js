var fs = require('fs');

module.exports = function (grunt) {
  'use strict';

  grunt.registerMultiTask('writeCdnCacheBuster',
    'Writes the CDN cachebuster timestamp to a file to be loaded by .NET MVC',
    function () {
      var done = this.async();

      var cacheBuster = !!this.data.devMode ? 'dev' : grunt.config.get('cacheBuster');

      var filePath = 'wwwroot/dist/cacheBuster.txt';

      var exists = true;
      try {
        fs.statSync(filePath);
      } catch (e) {
        exists = false;
      }

      if (exists) {
        fs.unlinkSync(filePath);
      }

      var stream = fs.createWriteStream(filePath);

      stream.once('open', function (fd) {
        stream.write(cacheBuster.toString());
        stream.end();
        done();
      });
    }
  );
}