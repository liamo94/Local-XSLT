module.exports = function (grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      less: {
        dev: {
          options: {
            compress: false,
            paths: ['/less']
          },
          files: {
            'css/output.css': 'less/test.less'
          }
        },   
      },
      watch: {
        styles: {
          files: ['less/**/*.less', 'less/**/*.md'],
          tasks: ['less:dev'],
          options: {
            nospawn: true,
            livereload: true
          }
        }
      },
      'http-server': {
        dev: {
          port : 8080,
          runInBackground: true
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-http-server');
  
    grunt.registerTask('dev', ['http-server:dev', 'less:dev', 'watch']);
  };