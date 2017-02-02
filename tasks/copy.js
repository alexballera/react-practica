import gulp from 'gulp'

gulp.task('copy', () => {
/* gulp.src('./src/index.html')
    .pipe(gulp.dest('./build')) */
  gulp.src(['./src/fonts/**'])
    .pipe(gulp.dest('./build/fonts'))
    .pipe(gulp.dest('./public/fonts'))
  // gulp.src(['./src/styles/vendors/**'])
  //   .pipe(gulp.dest('./public/styles/vendors'))
  // gulp.src(['./src/js/vendors/**'])
  //   .pipe(gulp.dest('./public/js/vendors'))
  gulp.src([
    './src/*.txt',
    './src/sitemap.*',
    './src/404.html',
    './src/*.php',
    './src/*.xml',
    './src/.htaccess'
  ]).pipe(gulp.dest('./public'))
})
