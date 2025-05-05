'use strict';

var gulp         = require('gulp'),
    pug          = require('gulp-pug'),
    stylus       = require('gulp-stylus'),
    sourcemaps   = require('gulp-sourcemaps'),
    image        = require('gulp-image'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync  = require('browser-sync').create(),
    cleanCSS     = require('gulp-clean-css'),
    changed      = require('gulp-changed');


//Compile stylus
gulp.task('stylus', function () {
    return gulp.src('dev/style/*.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('public/css/'))
        .pipe(browserSync.stream())
});

//CSS transfer
gulp.task('css', function () {
    return gulp.src('dev/css/**/*')
        .pipe(gulp.dest('public/css/'))
        .pipe(browserSync.stream())
});

//CSS minification
gulp.task('minify-css', function () {
    return gulp.src('public/css/style.css')
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ": " + details.stats.originalSize);
            console.log(details.name + ": " + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('public/css/minified/'))
});

//JS transfer
gulp.task('js', function () {
    return gulp.src('dev/js/**/*.js')
        .pipe(gulp.dest('public/js/'))
        .pipe(browserSync.stream())
});

//Fonts transfer
gulp.task('fonts', function () {
    return gulp.src('dev/fonts/**/*')
        .pipe(gulp.dest('public/fonts/'))
        .pipe(browserSync.stream())
});

//Compile pug
gulp.task('html', function buildHTML() {
    return gulp.src('dev/pug/*.pug')
        .pipe(pug({
            pretty: true,
        }))
        .on('error', function (e) {
            console.log(e);
            this.emit('end');
        })
        .pipe(gulp.dest('public/'))
        .pipe(browserSync.stream())

});

//Image optimization
gulp.task('image', function () {
    return gulp.src('dev/img/lk/**/*')
        .pipe(image())
        .pipe(gulp.dest('public/img/lk/'))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: 'public/'
        }
    });
});

//Watcher
gulp.task('watch', function() {
    gulp.watch('dev/style/**/*.styl', gulp.series('stylus'));
    gulp.watch('dev/css/**/*.css', gulp.series('css'));
    gulp.watch('dev/pug/**/*.pug', gulp.series('html'));
    gulp.watch('dev/js/**/*.js', gulp.series('js'));
    gulp.watch('dev/img/lk/**/*', gulp.series('image'));
    gulp.watch('dev/fonts/**/*', gulp.series('fonts'));

    gulp.watch('public/css/style.css', gulp.series('minify-css'));
    gulp.watch("public/html/*.html").on('changed', browserSync.reload);
    gulp.watch("public/css/*.css").on('changed', browserSync.reload);
    gulp.watch("public/js/*.js").on('changed', browserSync.reload);
    return
});

//Default
gulp.task('default', gulp.parallel('watch', 'browser-sync'));