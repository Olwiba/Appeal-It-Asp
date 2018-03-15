module.exports = function (grunt) {

  grunt.registerTask('buildBundles', ['uglify:bundles']);

  return {
    uglify: {
      options: {
        sourceMap: true
      },
      bundles: {
        files: {
          // To add js bundle files use the following format:
          // '{destination} : ['{file to bundle}', '{another file}', '!{exclude these files}']'

          'wwwroot/dist/dev/scripts/vendor/bundle.min.js' : ['scripts/vendor/**/*']
        }
      }
    }
  };
};