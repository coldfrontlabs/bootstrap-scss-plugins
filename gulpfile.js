// Include gulp.
const gulp = require('gulp');

// Include gulp plugins.
const sass = require('gulp-sass');
const sassLint = require('gulp-sass-lint');

/**
 * Runs sass-lint on provided files.
 *
 * @param {String} source - The path to the source files.
 *
 * @returns {Object} stream.
 */
function lintSass(source) {
  return gulp.src([source])
    .pipe(sassLint({
      configFile: '.sass-lint.yml'
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
}

function compileSass(source, destination) {
  return gulp.src([source])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(destination))
}

/**
 * Set linting tests.
 */

// Class test.
const lintClasses = () => lintSass('./test/classes/**/*.scss');
lintClasses.description = 'Lints all class tests.';

// Mixin test.
const lintMixins = () => lintSass('./test/mixins/**/*.scss');
lintMixins.description = 'Lints all mixin tests.';

// Other test.
const lintOther = () => lintSass('./test/other/**/*.scss');
lintOther.description = 'Lints all other tests.';

const lintSource = () => lintSass('./scss/**/*.scss');
lintSource.description = 'Lints all source files.';

/**
 * Set compiling tests.
 */

// Class test.
const compileClasses = () => compileSass('./test/classes/**/*.scss', './test/classes/results');
compileClasses.description = 'Compiles all class tests.';

// Mixin test.
const compileMixins = () => compileSass('./test/mixins/**/*.scss', './test/mixins/results');
compileMixins.description = 'Compiles all mixin tests.';

// Other test.
const compileOther = () => compileSass('./test/other/**/*.scss', './test/other/results');
compileOther.description = 'Compiles all other tests.';

function lint (callback) {
  gulp.series(
    lintClasses,
    lintMixins,
    lintOther
  )(callback);
}
lint.description = 'Lints all tests.';

function compile (callback) {
  gulp.series(
    compileClasses,
    compileMixins,
    compileOther
  )(callback);
}
compile.description = 'Compiles all tests.';

function defaultTask (callback) {
  gulp.series(
    lint,
    compile
  )(callback);
}
defaultTask.description = 'Lints and compiles all tests.';

// Create tasks.
gulp.task('default', defaultTask);

gulp.task(lint);
gulp.task(compile);

gulp.task('lint:classes', lintClasses);
gulp.task('lint:mixins', lintMixins);
gulp.task('lint:other', lintOther);

gulp.task('lint:source', lintSource);

gulp.task('compile:classes', compileClasses);
gulp.task('compile:mixins', compileMixins);
gulp.task('compile:other', compileOther);
