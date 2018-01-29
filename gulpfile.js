
const gulp = require('gulp')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const uglify = require('gulp-uglify-es').default
const stylus = require('gulp-stylus')
const nib = require('nib')
const minifyHTML = require('gulp-htmlmin')

function browserifyOrigin (entries, name, output) {
  return browserify({
    entries: entries
  })
    .transform('babelify')
    .bundle()
    .pipe(source(name))
    .pipe(buffer())
    .pipe(uglify({compress: true}))
    .pipe(gulp.dest(output))
}

gulp.task('html', () => {
  return gulp.src('./app/frontend/index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./app/backend/public/'))
})

gulp.task('stylus', () => {
  return gulp.src('./app/frontend/styles/*.styl')
    .pipe(stylus({
      compress: true,
      use: [nib()]
    }))
    .pipe(gulp.dest('./app/backend/public/'))
})

gulp.task('js', () => {
	return browserifyOrigin('./app/frontend/js/index.js', 'bundle.js', './app/backend/public/')
})

gulp.task('fonts', () => {
	return gulp.src('app/frontend/fonts/*')
		.pipe(gulp.dest('app/backend/public/fonts'))
})

gulp.task('images', () => {
	return gulp.src('app/frontend/img/**/*')
		.pipe(gulp.dest('app/backend/public/img'))
})

gulp.task('watch', () => {
	gulp.watch('app/frontend/index.html', ['html'])
	gulp.watch('app/frontend/js/**/*.js', ['js'])
})

gulp.task('default', ['html', 'fonts', 'images', 'stylus', 'js', 'watch'])

