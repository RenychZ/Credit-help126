const gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    htmlmin = require('gulp-htmlmin');     

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "dist/"
        }
    });
});

gulp.task('html', function(){
    return gulp.src('app/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({ stream: true}));
});

gulp.task('sass', function () {
   return gulp.src('app/sass/**/*.+(sass|scss)')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(autoprefixer({overrideBrowserslist: ['last 8 versions'], cascade: false}))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({ stream: true}));
});

gulp.task('style', function(){
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/slick-carousel/slick/slick.css',
        'node_modules/magnific-popup/dist/magnific-popup.css'
    ])
    .pipe(concat('libs.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('script', function(){
    return gulp.src('app/js/**/*.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({ stream: true}));
});

gulp.task('watch', function(){
    gulp.watch('app/sass/**/*.+(sass|scss|css)', gulp.parallel('sass'));
    gulp.watch('app/*.html', gulp.parallel('html'));
    gulp.watch('app/js/*.js', gulp.parallel('script'));
});

gulp.task('fonts', function(){
    return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('favicon', function(){
    return gulp.src('app/favicon/**/*')
    .pipe(gulp.dest('dist/favicon'));
});

gulp.task('mailer', function(){
    return gulp.src('app/mailer/**/*')
    .pipe(gulp.dest('dist/mailer'));
});


gulp.task('default', gulp.parallel('html', 'style', 'script', 'sass', 'watch', 'browser-sync', 'fonts', 'favicon', 'mailer'));