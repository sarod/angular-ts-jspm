var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var url = require('url');
var tslint = require('gulp-tslint');



var staticResourcesExtensions = [
	'css', 'html',
	'js', 'ts', 'map', 'json',
	'properties',
	'png', 'ico', 'jpg'];

var app = 'app';

function all(extension) {
	return app + '/**/*.' + extension;
}
var allFiles = staticResourcesExtensions.map(all);

var tsFiles = all('ts');


// Static server
gulp.task('serve', function () {
	browserSync.init({
		port: 8000,
		files: allFiles,
		// Stop the browser from automatically opening
		open: false,
		server: {
			baseDir: "app/",
			middleware: [
				function (req, res, next) {
					var requestedUrl = url.parse(req.url);
					var fileExtension = requestedUrl.pathname.split('.').pop();
					if (staticResourcesExtensions.indexOf(fileExtension) === -1) {
						console.log(requestedUrl.pathname + " does not have a static resource extension => returning index.html content");
						req.url = '/index.html';
					}
					next();
				}
			]
		}
	});
});

var srcTsFiles = ['app/**/*.ts', '!app/jspm_packages/**/*.ts'];
gulp.task('watch', function () {
	 gulp.watch(srcTsFiles, ['tslint']);
});

gulp.task('tslint', function () {
	return gulp.src(srcTsFiles)
		.pipe(tslint())
		.pipe(tslint.report('prose', {
			  emitError: false,
				summarizeFailureOutput: true
		}));
});