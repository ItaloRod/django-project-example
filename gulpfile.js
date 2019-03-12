var browserSync = require('browser-sync').create()
var gulp = require('gulp')
var path = require('path')
var ts = require('gulp-typescript')
var less = require('gulp-less')

browserSync.init({
    watch: true,
    proxy: "localhost:8000"
});

gulp.task('less', function () {
    return gulp.src(path.join(__dirname,'exampleApp','templates','less','main.less'))
        .pipe(less())
        .pipe(gulp.dest(path.join(__dirname,'exampleApp','static','css')))
        .pipe(browserSync.stream());
})

gulp.task('ts', function () {
    return gulp.src(path.join(__dirname,'exampleApp','templates','ts','main.ts'))
    .pipe(ts({
        noImplicitAny:true,
        outFile: 'main.js'
    }))
    .pipe(gulp.dest(path.join(__dirname, 'exampleApp','static','css')))
    .pipe(browserSync.stream())
})


gulp.task('watch', function() {
    gulp.watch(['exampleApp/templates/ts/**/*.ts'], gulp.parallel('ts'))
    gulp.watch(['exampleApp/templates/less/**/*.less'], gulp.parallel('less'))
    gulp.watch(['exampleApp/templates/html/*.html','exampleApp/**/*.py'])
    .on('change',browserSync.reload)
})


gulp.task('default', gulp.parallel(['watch']));
