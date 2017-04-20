var gulp = require('gulp');
var deleteLines = require('gulp-delete-lines');
var run = require('gulp-run');

gulp.task('compile-electron', function() { 
    return run('tsc -p src/tsconfig.json').exec();
});

gulp.task('build-angular', ['compile-electron'], function() {
    return run('webpack').exec();
});

gulp.task('default', ['build-angular'], function() {

});