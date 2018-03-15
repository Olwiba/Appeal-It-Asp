module.exports = function (grunt) {

  grunt.registerTask('watchCss', ['watch:css']);
  grunt.registerTask('watchJs', ['watch:js']);

  return {
    watch: {
      css: {
        files: ['sass/**/*.scss'],
        tasks: ['sass', 'postcss'],
        options: {
          livereload: 35729
        }
      },
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: 35729
        }
      },
      js: {
        files: ['scripts/**/*.js', '!scripts/**/*.min.js'],
        tasks: ['uglify:bundles']
      }
    }
  };
};