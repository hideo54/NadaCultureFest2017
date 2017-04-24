const gulp = require('gulp');
const pug = require('gulp-pug');
const less = require('gulp-less');

gulp.task('pug', () => {
    return gulp.src(['src/[^_]*.pug', 'src/*/[^_]*.pug'])
        .pipe(pug({
            data: require('./data.json'),
            pretty: true
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('less', () => {
    return gulp.src('src/css/style.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('font-awesome', () => {
    return gulp.src('font-awesome/less/font-awesome.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('default', ['pug', 'less', 'font-awesome']);

gulp.task('watch', () => {
    gulp.watch(['src/*.pug', 'data.json'], ['pug']);
    gulp.watch('src/css/style.less', ['less']);
    gulp.watch('font-awesome/less/font-awesome.less', ['font-awesome']);
});
