const gulp = require('gulp')
const addsrc = require('gulp-add-src')
const debug = require('gulp-debug')
const size = require('gulp-size')
const zip = require('gulp-zip')

const pkg = require('../package.json')

gulp.task('package', ['install', 'compile'], (done) => {
  const artifactName = `${pkg.name}.zip`
  const files = [
    './build/stage/node_modules/**',
    '!./build/stage/node_modules/**/.bin',
    '!./build/stage/node_modules/**/.bin/**'
  ]

  gulp.src(files, { base: './build/stage/', dot: true })
      .pipe(addsrc(['dist/**']))
      .pipe(zip(artifactName))
      .pipe(gulp.dest('build'))
      .pipe(debug({ title: 'zip' }))
      .pipe(size({ title: 'package', gzip: true }))
      .on('end', () => { done() })
})
