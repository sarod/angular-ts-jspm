var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var url = require('url');


// Static server
gulp.task('serve', function() {
    browserSync.init({
        port: 8000,
        files: ["client/**/*.html", "client/**/*.css", "client/**/*.js"],
        // Stop the browser from automatically opening
        open: false,
        server: {
                baseDir: "client/",
            
                middleware: [
                    function (req, res, next) {
                        var requestedUrl = url.parse(req.url);
                        var fileExtension = requestedUrl.pathname.split('.').pop();
                        var staticResourcesExtensions = [
                            'css', 'html', 
                            'js', 'ts', 'map', 'json', 
                            'properties', 
                            'png', 'ico', 'jpg'];
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

