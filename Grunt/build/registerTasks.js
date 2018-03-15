module.exports = function(grunt) {

  // Build tasks, output dest: 'wwwroot/dist/dev'
  grunt.registerTask('buildCore', ['buildAssets', 'buildCss', 'buildBundles']);

  // Dev tasks then watch files
  grunt.registerTask('dev', ['buildCore', 'buildCacheBusterDev', 'watch']);
  grunt.registerTask('devCss', ['buildCore', 'buildCacheBusterDev', 'watchCss']);
  grunt.registerTask('devJs', ['buildCore', 'buildCacheBusterDev', 'watchJs']);

  // Prod tasks
  grunt.registerTask('buildProd', ['clean:dist', 'buildCore', 'buildCacheBuster']);

};