var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    babelify = require('babelify');

gulp.task('scripts:server', () => {
    return gulp.src('./src-server/**/*.js')
        .pipe($.cached('server'))
        .pipe($.babel())
        .pipe(gulp.dest('./build'));
});

gulp.task('watch:scripts:server', gulp.series(
    'scripts:server',
    () => {
        return gulp.watch('./src-server/**/*.js', gulp.series('scripts:server'));
    }
))