import gulp from 'gulp'
import browserify from 'browserify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import uglify from 'gulp-uglify'
import babelify from 'babelify'
import rename from 'gulp-rename'

// Agregado presets y plugins en .babelrc o en package.json plugin: "transform-regenerator"

gulp.task('scripts', () => {
  return browserify('./src/main.js')
  .transform(babelify)
  .bundle()
  .on('error', (err) => {
    console.log(err)
    this.emit('end')
  })
  .pipe(source('main.js'))
  .pipe(buffer())
  .pipe(rename('index.js'))
  .pipe(gulp.dest('./build/js'))
  .pipe(uglify())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('./src/js'))
  .pipe(gulp.dest('./build/js'))
  .pipe(gulp.dest('./public/js'))
})
