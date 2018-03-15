var cacheBuster = new Date().getTime();

module.exports = function (grunt) {

  // Cachebuster task moves the files from 'wwwroot/dist/dev' -> 'wwwroot/dist/ABC123'
  grunt.registerTask('buildCacheBuster', ['copy:cacheBusterToProd', 'writeCdnCacheBuster:prod', 'clean:cacheBusterDev']);
  grunt.registerTask('buildCacheBusterDev', ['writeCdnCacheBuster:dev']);

  return {
    clean: {
      dist: ['wwwroot/dist/*'],
      cacheBusterDev: ['wwwroot/dist/dev']
    },
    copy: {
      cacheBusterToProd: {
        files: [
          { expand: true, cwd: 'wwwroot/dist/dev', src: '**', dest: 'wwwroot/dist/' + cacheBuster + '/' },
        ]
      },
    },
    cacheBuster: cacheBuster,
    writeCdnCacheBuster: {
      prod: {
        devMode: false
      },
      dev: {
        devMode: true
      }
    }
  };
};