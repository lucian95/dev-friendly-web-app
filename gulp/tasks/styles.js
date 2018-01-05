const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const importCss = require('postcss-import');
const mixins = require('postcss-mixins');
const rename = require('gulp-rename');

gulp.task('styles', function () {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([importCss, mixins, cssvars, nested, autoprefixer]))
    .pipe(rename('style-bundle.css'))
    .on('error', function (error) {
      console.log(error.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/bundles'));
});
