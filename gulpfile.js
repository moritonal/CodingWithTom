const gulp = require("gulp");

gulp.task('copy-pics',function(){
    return gulp.src([
        './pics/*.png',
    ]) 
    .pipe(gulp.dest('./dist/pics'));
});

gulp.task('copy-workers',function(){
    return gulp.src([
        './workers/*.js',
    ]) 
    .pipe(gulp.dest('./dist/'));
});

gulp.task("default", ["copy-pics", "copy-workers"]);