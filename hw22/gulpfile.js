import gulp from 'gulp';
import sass from 'sass';
import gulpSass from 'gulp-sass';
import concat from 'gulp-concat';
import babel from 'gulp-babel-minify';

const scssCompiler = gulpSass(sass);

const SRC_FOLDER = './src';
const BUILD_FOLDER = './build';
const JS_FILES_PATH = SRC_FOLDER + '/js/**/*.js';
const SCSS_FILES_PATH = SRC_FOLDER + '/scss/**/*.scss';



async function jsCompilation() {
  gulp.src(['./src/js/data.js', SRC_FOLDER + '/js/app.js'])
  .pipe(babel())
  .pipe(concat('result.js'))
  .pipe(gulp.dest(BUILD_FOLDER));
}

async function sassCompilation() {
  gulp.src(SCSS_FILES_PATH)
  .pipe(scssCompiler())
  .pipe(gulp.dest(BUILD_FOLDER));
}

gulp.task('sass-compile', sassCompilation);

gulp.task('js-compile', jsCompilation);


gulp.task('watch-scss', function() {
  gulp.watch(SCSS_FILES_PATH, sassCompilation)
})

gulp.task('watch-js', function() {
  gulp.watch(JS_FILES_PATH, jsCompilation)
})


gulp.task('watch', gulp.parallel(
  'watch-scss',
  'watch-js'
));

gulp.task('default', gulp.parallel('js-compile', 'sass-compile'));