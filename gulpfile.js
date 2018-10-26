const gulp = require("gulp");
const rename = require("gulp-rename");

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

gulp.task("noNotFound", () => {
    return gulp.src([
        './dist/index.html',
    ])
    .pipe(rename("404.html"))
    .pipe(gulp.dest('./dist/'));
})

gulp.task("noJekyll", () => {
    const path = require("path");
    const fs = require("fs");

    fs.writeFileSync(path.join("./dist", ".nojekyll"), "")
})

gulp.task("default", gulp.parallel("copy-pics", "noNotFound", "noJekyll", "copy-workers"));
