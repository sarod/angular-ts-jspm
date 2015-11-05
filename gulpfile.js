const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const url = require('url');
const typescript = require('gulp-typescript');
const tslint = require('gulp-tslint');



const staticResourcesExtensions = [
	'css', 'html',
	'js', 'ts', 'map', 'json',
	'properties',
	'png', 'ico', 'jpg'];

const app = 'app';

function all(extension) {
	return app + '/**/*.' + extension;
}
const allFiles = staticResourcesExtensions.map(all);



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
					const requestedUrl = url.parse(req.url);
					const fileExtension = requestedUrl.pathname.split('.').pop();
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

const srcTsFiles = ['app/**/*.ts', '!app/jspm_packages/**/*.ts'];

gulp.task('watch', ['tslint', 'compile', 'doWatch']);

gulp.task('doWatch', function () {
	gulp.watch(srcTsFiles, ['tslint', 'compile']);
});

gulp.task('tslint', function () {
	return gulp.src(srcTsFiles)
		.pipe(tslint())
		.pipe(tslint.report('prose', {
			emitError: false,
			summarizeFailureOutput: true
		}));
});

var tsProject = typescript.createProject('tsconfig.json');

gulp.task('compile', function () {
  tsProject.src()
    .pipe(typescript(tsProject, undefined, typescript.reporter.longReporter()))
		.pipe(gulp.dest('dist'));
});

