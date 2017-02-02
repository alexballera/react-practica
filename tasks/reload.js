import gulp from 'gulp'
import browserSync from 'browser-sync'

gulp.watch([
  './src/**/*.html',
  './src/**/*.scss',
  './src/main.js',
  './src/homepage/**/*.js',
  './src/components/**/*.js',
  './src/data/**/*.js',
  './src/about/**/*.js',
  './src/about-why/**/*.js',
  './src/about-differences/**/*.js',
  './src/about-community/**/*.js',
  './src/navigation/**/*.js',
  './src/team/**/*.js',
  './src/careers/**/*.js',
  './src/contact/**/*.js',
  './src/services/**/*.js',
  './src/services-structuring/**/*.js'
]).on('change', browserSync.reload)
