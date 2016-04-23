var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

var paths = {
    scripts: 'frontend/js/**/*.js',
    asis: 'frontend/**/*.{html,json}',
    css: 'frontend/css/**/*.less'
};

// Clean public folder
gulp.task('clean', function() {
    return del(['public']);
});

gulp.task('scripts', ['clean'], function() {
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/js'));
});

gulp.task('scripts_dev', ['clean'], function() {
    return gulp.src(paths.scripts)
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('public/js'));
});

gulp.task('asis', ['clean'], function() {
    return gulp.src(paths.asis)
        .pipe(gulp.dest('public'));
});

gulp.task('css', ['clean'], function() {
    return gulp.src(paths.css)
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('public/css'));
});

gulp.task('css_dev', ['clean'], function() {
    return gulp.src(paths.css)
        .pipe(less())
        .pipe(gulp.dest('public/css'));
});

gulp.task('build', ['scripts', 'asis', 'css']);
gulp.task('dev', ['scripts_dev', 'asis', 'css_dev']);

