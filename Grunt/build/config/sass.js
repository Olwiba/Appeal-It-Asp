module.exports = function (grunt) {

  grunt.registerTask('buildCss', ['sass', 'postcss']);

  return {
    sass: {
      options: {
        sourceMap: false,
        sourceMapRoot: '/',
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'wwwroot/dist/dev/stylesheets/screen.css': 'sass/screen.scss'
        }
      }
    },
    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer')({ browsers: ['last 2 versions', '> 1%', 'ie >= 9'] }), // add vendor prefixes https://github.com/ai/browserslist#queries
          require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'wwwroot/dist/dev/stylesheets/screen.css'
      }
    }
  };
};