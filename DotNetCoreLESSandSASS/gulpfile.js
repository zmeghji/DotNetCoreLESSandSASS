var gulp = require("gulp"); 
var cleanCss = require("gulp-clean-css");
var less = require("gulp-less");
var sass = require("gulp-sass");
//gulp.task("default", function (){
//    return gulp.src("Styles/*.less")
//        .pipe(less())
//        .pipe(cleanCss({ compatibility: 'ie8' }))
//        .pipe(gulp.dest("wwwroot/css"));
//});


gulp.task("default", function () {
    return gulp.src("Styles/*.scss")
        .pipe(sass())
        .pipe(cleanCss({ compatibility: 'ie8' }))
        .pipe(gulp.dest("wwwroot/css"));
})