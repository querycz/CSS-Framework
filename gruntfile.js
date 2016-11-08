module.exports = function(grunt) {

	grunt.initConfig({


		// Compile SASS and minify
		sass: {
			style_min: {
				options: {
		            sourceMap: false,
					outputStyle: 'compressed',
		        },
		        dist: {
		            files: {
		                'dist/css-framework.min.css': 'less/css-framework.less'
		            }
		        }
			},
			style: {
				options: {
		            sourceMap: false
		        },
		        dist: {
		            files: {
		                'dist/css-framework.css': 'less/css-framework.less'
		            }
		        }
			}
	    },


		// Autoprefix
		autoprefixer: {
			options: {
				map: false
			},
			file_min: {
				src: 'dist/css-framework.min.css',
				dest: 'dist/css-framework.min.css'
			},
			file: {
				src: 'dist/css-framework.css',
				dest: 'dist/css-framework.css'
			}
		},


		// Notify
		notify: {
			notify_sass: {
				options: {
					title: 'SASS se zkompilovalo na výbornou!',  // Optional
					message: 'Jsi šikovný borec, jen tak dál!' // Required
				}
			}
		},


		// Watch and do
		watch: {
			less: {
				files: ['scss/**/*.scss'],
				tasks: ['sass:style_min', 'sass:style', 'autoprefixer:file_min', 'autoprefixer:file', 'notify:notify_sass'],
				options: {
					spawn: false,
					//livereload: true
				}
			}
		}


	});


	// Load tasks
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-notify');


	// Register tasks
	grunt.registerTask('default', [ 'watch' ]);


};