var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('app/sass/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('img', function () {
    return gulp.src('app/img/**/*')
        .pipe(gulp.dest('build/img'))
        .pipe(browserSync.reload({stream: true}))

});

gulp.task("html", function () {
    return gulp.src("app/**/*.html")
        .pipe(gulp.dest("build"))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task("watch", [ 'sass', "html", 'img'], function () {
    browserSync.init({
        server: "./build",
        notify: false,
        ui: {
            port: 3000
        }
    });
    gulp.watch('app/sass/**/*.scss', ["sass"]);
    gulp.watch('app/**/*.html' , ['html']);
    gulp.watch('src/fonts/**/*', ["fonts"]);
    gulp.watch('app/img/**/*', ["img"]);
});
