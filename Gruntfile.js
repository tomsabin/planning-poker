module.exports = function (grunt) {
  grunt.loadNpmTasks( "grunt-contrib-watch" );

  grunt.initConfig({
    watch: {
      html: {
        files: "*.html",
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.registerTask( "default", [ "watch" ] );
};
