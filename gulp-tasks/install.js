const gulp = require('gulp')
const install = require('gulp-install')
const gutil = require('gulp-util')

const del = require('del')

gulp.task('install', () => {
  gutil.log('deleting files in build/stage/...')
  del.sync(['build/stage/**'])

  return gulp.src(['./package.json', './package-lock.json'])
        .pipe(gulp.dest('./build/stage'))
        .pipe(install({ production: true }))
})
