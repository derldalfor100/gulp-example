const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('message', async () => console.log('Gulp is running...'));

gulp.task('copyHtml', async () => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('imageMin', async () => {
    gulp.src('src/images/*')
        .pipe(imagemin())
            .pipe(gulp.dest('dist/images'));
});

gulp.task('default', async () => console.log('Gulp is running...'));