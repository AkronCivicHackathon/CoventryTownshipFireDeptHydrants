module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-compile-handlebars');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'public/**/*'
          ]
        },
        options: {
          open: false,
          server: './public',
          watchTask: true
        }
      }
    },

    clean: ['public/**/*'],

    'compile-handlebars': {
      pages: {
        files: [{
          expand: true,
          ext: '.html',
          cwd: 'app/pages/',
          src: '**/*.hbs',
          dest: 'public'
        }],
        templateData: {
        }
      }
    },

    copy: {
      cssAsScss: {
        files: [{
          expand: true,
          cwd: 'bower_components',
          src: [
            'normalize-css/normalize.css'
          ],
          dest: 'bower_components',
          filter: 'isFile',
          ext: '.scss'
        }]
      },
      public: {
        files: [{
          expand: true,
          cwd: 'app/public',
          src: [
            '**/*'
          ],
          dest: 'public'
        }]
      }
    },

    sass: {
      options: {
        cacheLocation: '.tmp/.sass-cache',
        loadPath: ['bower_components']
      },
      dev: {
        options: {
          debugInfo: false,
          style: 'expanded'
        },
        files: {
          'public/app.css': 'app/styles/app.scss'
        }
      },
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'public/app.css': 'app/styles/app.scss'
        }
      }
    },

    watch: {
      pages: {
        files: 'app/pages/**/*',
        tasks: ['compile-handlebars']
      },

      styles: {
        files: 'app/styles/**/*',
        tasks: ['sass:dev']
      }
    }
  });

  grunt.registerTask('default', ['clean', 'copy', 'compile-handlebars', 'sass:dev', 'browserSync', 'watch']);
};
