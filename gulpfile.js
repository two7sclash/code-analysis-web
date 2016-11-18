var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');


gulp.task("build", function(){
    return browserify({
        entries: ["./src/main.js"],
        extensions: [".js", ".jsx"]
    })
    .transform(babelify.configure({
        presets : ["es2015", "react", "stage-0"]
    }))
    .bundle()
    .pipe(source("app.js"))
    .pipe(gulp.dest("./js"))
    ;
});
