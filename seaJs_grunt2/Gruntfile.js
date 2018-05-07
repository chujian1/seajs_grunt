module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        transport : {
            webqq : {
                files : {
                    'build' : ['./webqq/js/main_a.js','./webqq/js/main_b.js','./webqq/js/main_c.js']
                }
            }
        },
        concat : {
            webqq : {
                files : {
                    'dist/main.js' : ['build/webqq/js/main_a.js','build/webqq/js/main_b.js','build/webqq/js/main_c.js']
                }
            }
        }/*,
        uglify : {
            webqq : {
                files : {
                    'dist/main.min.js' : ['./dist/main.js']
                }
            }
        }*/

    });

    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.loadNpmTasks('grunt-cmd-concat');
    //grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['transport','concat'/*'uglify'*/]);


};