import gulp from 'gulp'
import inject from 'gulp-inject'
import series from 'stream-series'

gulp.task('inject', () => {
  var vendorJS = gulp.src(['./src/js/vendors/*.js'])
  var appJS = gulp.src(['./src/js/index.min.js'])
  // var vendorCSS = gulp.src(['./src/styles/vendors/*.*.ccs'])
  var appCSS = gulp.src(['./src/styles/style.min.css'])

  gulp.src('./src/index.html')
    .pipe(inject(series([
      vendorJS,
      appJS,
      // vendorCSS,
      appCSS
    ],
      {
        read: false
      }
  ),
      {
        relative: true
      }
  ))
    .pipe(gulp.dest('./src'))
})
