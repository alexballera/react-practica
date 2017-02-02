import gulp from 'gulp'

gulp.task('watch', () => {
  gulp.watch('./src/**/*.html', ['build:html'])
  gulp.watch('./src/**/*.scss', ['styles'])
  gulp.watch('./src/videos/**/*.*', ['images'])
  gulp.watch([
    './src/main.js',
    './src/homepage/**/*.js',
    './src/components/**/*.js',
    './src/data/**/*.js',
    './src/about/**/*.js',
    './src/about-why/**/*.js',
    './src/about-differences/**/*.js',
    './src/about-community/**/*.js',
    './src/community/**/*.js',
    './src/navigation/**/*.js',
    './src/team/**/*.js',
    './src/careers/**/*.js',
    './src/contact/**/*.js',
    './src/services/**/*.js',
    './src/services-structuring/**/*.js'
  ], ['scripts'])
})
