const gulp = require('gulp');
const pug = require('gulp-pug');
const less = require('gulp-less');

gulp.task('pug', () => {
    return gulp.src('src/[^_]*.pug')
        .pipe(pug({
            data: require('./data.json'),
            pretty: true
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('less', () => {
    return gulp.src('src/style.less')
        .pipe(less())
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['pug', 'less']);

gulp.task('watch', () => {
    gulp.watch('src/[^_]*.pug', ['pug']);
    gulp.watch('src/style.less', ['less']);
});
