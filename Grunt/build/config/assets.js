module.exports = function (grunt) {

  grunt.registerTask('buildAssets', ['copy:assets']);

  return {
    copy: {
      assets: {
        files: [
          { expand: true, cwd: 'fonts', src: '**', dest: 'wwwroot/dist/dev/fonts' },
          { expand: true, cwd: 'images', src: '**', dest: 'wwwroot/dist/dev/images' }
        ]
      }
    }
  };
};