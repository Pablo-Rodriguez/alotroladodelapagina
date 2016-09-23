var gulp = require('gulp'),
	//browserify = require('browserify'),
	//source = require('vinyl-source-stream'),
	//buffer = require('vinyl-buffer'),
	//uglify = require('gulp-uglify'),
	stylus = require('gulp-stylus'),
	nib = require('nib'),
    vulcanize = require('gulp-vulcanize'),
	minifyHTML = require('gulp-minify-html'),
	sequence = require('run-sequence');

gulp.task('components', function () {
  return gulp.src('./app/frontend/components/*.html')
    .pipe(vulcanize({
		inlineScripts: true,
		inlineCss: true
    }))
    .pipe(minifyHTML())
    .pipe(gulp.dest('./app/backend/public/components/'));
});

gulp.task('stylus-components', function () {
	return gulp.src('./app/frontend/stylus/components/*.styl')
    .pipe(stylus({
      compress: true,
      use: [nib()]
    }))
    .pipe(gulp.dest('./app/frontend/css/'));
});

gulp.task('stylus-globals', function () {
  return gulp.src('./app/frontend/stylus/*.styl')
    .pipe(stylus({
      compress: true,
      use: [nib()]
    }))
    .pipe(gulp.dest('./app/backend/public/css/'));
});

gulp.task('build', function () {
  return sequence(['stylus-globals', 'stylus-components'], 'components');
});

/*gulp.task('js', function () {
	return browserify({
    entries: 'app/frontend/js/index.js',
    debug: true
  }).transform('babelify', {presets: ['es2015']}).bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(uglify({compress: true}))
    .pipe(gulp.dest('app/backend/public/js/'));
});*/

gulp.task('fonts', function () {
	return gulp.src('app/frontend/fonts/*')
		.pipe(gulp.dest('app/backend/public/fonts'));
});

gulp.task('images', function () {
	return gulp.src('app/frontend/img/**/*')
		.pipe(gulp.dest('app/backend/public/img'));
});

gulp.task('watch', function () {
	gulp.watch('app/frontend/index.html', ['html']);
	gulp.watch('app/frontend/components/**/*.html', ['components']);
	gulp.watch('app/frontend/stylus/**/*.styl', ['build']);
	//gulp.watch('app/frontend/js/**/*.js', ['js']);
});

gulp.task('default', ['build', 'fonts', 'images', 'watch']);
