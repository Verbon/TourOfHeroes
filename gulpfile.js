var gulp = require('gulp');
var deleteLines = require('gulp-delete-lines');
var run = require('gulp-run');
var clean = require('gulp-clean');

gulp.task('clean', function() {
    return gulp.src('./bin', { read: false })
        .pipe(clean());
});

gulp.task('compile-electron', ['clean'], function() { 
    return run('tsc -p src/tsconfig.json').exec();
});

gulp.task('build-angular', ['compile-electron'], function() {
    return run('webpack').exec();
});

gulp.task('default', ['build-angular'], function() {

});