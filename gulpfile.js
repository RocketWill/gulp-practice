var gulp = require('gulp');
var sass = require('gulp-sass')
var uglifycss = require('gulp-uglifycss');

gulp.task('sass', function () {
    return gulp.src('./sass/*.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
  });



gulp.task('css', function () {
    gulp.src('./css/*.css')
      .pipe(uglifycss({
        
        "uglyComments": true
      }))
      .pipe(gulp.dest('./dist/'));
});




gulp.task('run', done=>{
    gulp.series('sass', 'css');
    done();
});


gulp.task('watch', function(){
    gulp.watch('./sass/*.sass', gulp.series('sass'));
    gulp.watch('./css/*.css', gulp.series('css'));
});

gulp.task('default', gulp.parallel('run','watch'));