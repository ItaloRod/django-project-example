var browserSync = require('browser-sync').create()
var gulp = require('gulp')
var path = require('path')
var less = require('gulp-less')

browserSync.init({
    watch: true,
    proxy: "localhost:8000"
});

gulp.task('less', function () {
    return gulp.src('./exampleApp/templates/less/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')],
        }))
        .pipe(gulp.dest('./exampleApp/static/css'))
        .pipe(browserSync.stream());
})


gulp.task('watch', function() {
    gulp.watch(['exampleApp/templates/less/**/*.less'], gulp.parallel('less'))
    gulp.watch(['exampleApp/templates/html/*.html','exampleApp/**/*.py'])
    .on('change',browserSync.reload)
})


gulp.task('default', gulp.parallel('watch'));
