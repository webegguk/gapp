const child = require('child_process');
const browserSync = require('browser-sync').create();

const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const gutil = require('gulp-util');
const sass = require('gulp-sass');

const siteRoot = '_site';
const cssFiles = '_sass/**/*.?(s)css';

gulp.task('css', () => {
  gulp.src(cssFiles)
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compressed'
        }))
        // Writes sourcemaps into the CSS file
        .pipe(sourcemaps.write())
    //.pipe(concat('all.css'))
    .pipe(gulp.dest('_includes'));
});

gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', ['build',
    '--watch',
    '--incremental',
    '--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('serve', () => {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });
  gulp.watch(cssFiles, ['css']);
});

gulp.task('default', ['css', 'jekyll', 'serve']);
