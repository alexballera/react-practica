import gulp from 'gulp'
require('require-dir')('./tasks')

/* Instalar las siguientes dependencias:
npm i -S babel-eslint bootstrap standard yo-yo empty-element
npm i -D babel-plugin-transform-regenerator babel-preset-latest babelify browser-sync
browserify del font-awesome gulp gulp-autoprefixer gulp-cache gulp-cssnano gulp-gh-pages
gulp-htmlmin gulp-imagemin gulp-inject gulp-notify gulp-plumber gulp-rename gulp-sass
gulp-sass-glob gulp-sass-lint gulp-uglify gulp-uncss imagemin-jpegtran imagemin-optipng
imagemin-pngquant imagemin-svgo jquery require-dir sass-lint vinyl-buffer vinyl-source-stream
*/

// Build
gulp.task('build', ['copy', 'inject'], () => {
  // gulp.start('styles', 'scripts', 'images')
  gulp.start('build:html', 'styles', 'scripts', 'images')
})

// Default
gulp.task('default', ['clean'], () => {
  gulp.start('serve', 'watch', 'build')
  // gulp.start('watch', 'build')
})
