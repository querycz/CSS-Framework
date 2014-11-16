module.exports = function(grunt) {

	grunt.initConfig({


		// Pospojuj JS
		concat: {
			js: {
				options: {
					separator: ';'
				},
				src: [

				
				// Retina.js
				'bower_components/retina.js/dist/retina.js',


				// Swiper.js
				'bower_components/swiper/dist/idangerous.swiper.js',


				// Fancybox.js
				'bower_components/fancybox/source/jquery.fancybox.js',


				// FastCLick
				'bower_components/fastclick/lib/fastclick.js',


				// NetteForms
				'js/netteForms.js',


				// Main.js
				'js/main.js'

				
				],
				dest: '../www/js/main.min.js'
			}
		},


		// Minifikuj JS
		uglify: {
			options: {
				mangle: false
			},
			js: {
				files: {
					'../www/js/main.min.js': ['../www/js/main.min.js']
				}
			}
		},


		// Kompiluj a minifikuj less
		less: {
			style: {
				files: {
					'../css/style.min.css': 'less/style.less'
				},
				options: {
					compress: true,
					relativeUrls: true,
					yuicompress: true,

					sourceMap: false, // Nezapomenout přeponout i v Autoprefixeru!
					sourceMapFilename: '../css/style.min.css.map', // where file is generated and located
					sourceMapURL: 'style.min.css.map', // the complete url and filename put in the compiled css file
					sourceMapBasepath: '', // Sets sourcemap base path, defaults to current working directory.
					sourceMapRootpath: '../' // adds this path onto the sourcemap filename and less file paths
				}
			}
		},


		// Autoprefixuj
		autoprefixer: {
			options: {
				map: false
			},
			file: {
				src: '../css/style.min.css',
				dest: '../css/style.min.css'
			}
		},


		// Zkopíruj dependency komponenty z bower adresáře, aby šly použít mimo tento adresář
		copy: {
			jquery: {
				src: 'bower_components/jquery/dist/jquery.min.js',
				dest: '../www/js/jquery.min.js'
			},
			html5shiv: {
				src: 'bower_components/html5shiv/dist/html5shiv.min.js',
				dest: '../www/js/html5shiv.min.js'
			},
			css3mediaqueries: {
				src: 'bower_components/css3-mediaqueries-js/css3-mediaqueries.js',
				dest: '../www/js/css3-mediaqueries.js'
			},
			fontawesome: {
				cwd: 'bower_components/fontawesome/fonts/',
				src: '**',
				dest: '../www/font/fontawesome/',
				expand: true
			}
		},


		// Notifikace úspěchu a failů pro parádu
		notify: {
			upozorni_js: {
				options: {
					title: 'Kombinace a minifikace JS se povedla!',  // Volitelný
					message: 'Jsi šikovný borec, jen tak dál!' // Povinný
				}
			},
			upozorni_less: {
				options: {
					title: 'LESS se zkompilovalo na výbornou!',  // Volitelný
					message: 'Jsi šikovný borec, jen tak dál!' // Povinný
				}
			},
			/*deploy_dev: {
				options: {
					title: 'Deploy na dev se podařil!',  // Volitelný
					message: 'Jsi šikovný borec, jen tak dál!' // Povinný
				}
			},
			deploy_live: {
				options: {
					title: 'Deploy na live se podařil!',  // Volitelný
					message: 'Jsi šikovný borec, jen tak dál!' // Povinný
				}
			}*/
		},


		// Sleduj a konej
		watch: {
			js: {
				files: ['js/*.js'],
				tasks: ['concat:js', 'uglify:js', 'notify:upozorni_js'],
				options: {
					spawn: false,
					livereload: true
				}
			},
			less: {
				files: ['less/*.less'],
				tasks: ['less:style', 'autoprefixer:file', 'notify:upozorni_less'],
				options: {
					spawn: false,
					livereload: true
				}
			}
		},


		// Hashres
		hashres: {
			options: {
				encoding: 'utf8',
				fileNameFormat: '${name}.${ext}?${hash}',
				renameFiles: false
			},
			prod: {
				options: {
				},
				src: ['../www/css/style.min.css', '../www/js/main.min.js'],
				dest: '../app/templates/@layout.latte'
			}
		}


		// Deploy
		/*ftpush: {
			live: {
				auth: {
					host: 'ftp.feeio.com',
					port: 21,
					authKey: 'key1'
				},
				src: '../',
				dest: '/test',
				exclusions: [
					'www-dev',
					'composer.json',
					'composer.lock',
					'Feeio.sublime-project',
					'Feeio.sublime-workspace',
					'license.md',
					'readme.md',
					'sftp-config-alt.json',
					'sftp-config.json'
				],
				simple: false,
				useList: false
			},
			dev: {
				auth: {
					host: 'ftp.feeio.com',
					port: 21,
					authKey: 'key1'
				},
				src: '../',
				dest: '/dev',
				exclusions: [
					'www-dev',
					'composer.json',
					'composer.lock',
					'Feeio.sublime-project',
					'Feeio.sublime-workspace',
					'license.md',
					'readme.md',
					'sftp-config-alt.json',
					'sftp-config.json'
				],
				simple: false,
				useList: false
			}
		}*/


	});


	// Naloaduj tasky
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-notify');
	grunt.loadNpmTasks('grunt-hashres');

	//grunt.loadNpmTasks('grunt-ftpush');


	// Registruj spouštějící úlohy pro terminál - pro defaultní stačí volat "grunt"
	grunt.registerTask('default', [ 'watch' ]);
	
	//grunt.registerTask('deploy:live', [ 'ftpush:live', 'notify:deploy_live' ]);
	//grunt.registerTask('deploy:dev', [ 'ftpush:dev', 'notify:deploy_dev' ]);


};