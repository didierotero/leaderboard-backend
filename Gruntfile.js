module.exports = function (grunt) {

  var path = require("path");

  // Project configuration.
  grunt.initConfig({

    /**
     * Load package.json
     */
    pkg: grunt.file.readJSON('package.json'),



    /**
     * Mocha - Unit Tests
     */

    mochacli: {
      /*options: {
        reporter: 'spec',
        require: ['should'],

        project: {
          src: ['test/**\/*.spec.js']
        }
      }*/
      options: {
            require: ['should'],
            reporter: 'spec',
            bail: true
        },
        all: ['test/*.js']
    },

    /**
     * Watch - Run tasks on filesystem changes
     */

    watch: {
      options: {
        tasks: ['build:dev'],
        interrupt: true,
        atBegin: true
      },
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['build:dev']
      },
      project: {
        files: ['src/**/*.js', 'test/**/*.spec.js'],
        tasks: ['build:dev']
      }
    }


  });

  // Loads all grunt tasks from devDependencies starting with "grunt-"
  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', ['test']);

  grunt.registerTask('test', ['mochacli']);

  // grunt.registerTask('build', ['build:dev']);
  // grunt.registerTask('build:dev', ['test', 'clean:build', 'concat_in_order:main']);
  // grunt.registerTask('build:dist', ['test', 'clean:build', 'clean:dist', 'concat_in_order:main', 'uglify:build']);

}
