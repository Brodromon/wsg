var gulp = require('gulp'),
    sass = require('gulp-sass'),
    bSync = require('browser-sync');

gulp.task('sass', function() {
    return gulp.src('app/sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(bSync.reload({stream: true}));
});

gulp.task('b-sync', function() {
    bSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('watch', ['b-sync', 'sass'], function() {
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/**/*.html', bSync.reload);
    gulp.watch('app/js/**.js', bSync.reload);
})
