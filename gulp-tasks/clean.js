const gulp = require('gulp')

const del = require('del')

gulp.task('clean', () => {
  del.sync(['build', 'coverage', 'dist'])
})
