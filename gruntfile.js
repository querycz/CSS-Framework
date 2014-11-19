module.exports = function(grunt) {

	grunt.initConfig({


		// Compile less and minify
		less: {
			style_min: {
				files: {
					'dist/css-framework.min.css': 'less/css-framework.less'
				},
				options: {
					compress: true,
					relativeUrls: true,
					yuicompress: true
				}
			},
			style: {
				files: {
					'dist/css-framework.css': 'less/css-framework.less'
				},
				options: {
					compress: false,
					relativeUrls: true,
					yuicompress: false
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
			notify_less: {
				options: {
					title: 'LESS se zkompilovalo na výbornou!',  // Optional
					message: 'Jsi šikovný borec, jen tak dál!' // Required
				}
			}
		},


		// Watch and do
		watch: {
			less: {
				files: ['less/*.less'],
				tasks: ['less:style_min', 'less:style', 'autoprefixer:file_min', 'autoprefixer:file', 'notify:notify_less'],
				options: {
					spawn: false,
					livereload: true
				}
			}
		}


	});


	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-notify');


	// Register tasks
	grunt.registerTask('default', [ 'watch' ]);


};