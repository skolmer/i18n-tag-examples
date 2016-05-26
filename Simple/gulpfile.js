/* eslint no-console:0 */
const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const browserify = require('browserify')
const path = require('path')
const i18nTagSchema = require('i18n-tag-schema').default

gulp.task('generate-translation-schema', (cb) => {
  i18nTagSchema('./src', '\\.js', './translation.schema.json', (output) => {
    console.log(output)
    cb() // finished task
  })
})

gulp.task('build-release-de', () => {
  // build a german release
  const translations = path.resolve(__dirname, './translations/translation.de.json');

  browserify('./src/index.js', { debug: true }).transform('babelify', {
    'presets': [
      'es2015',
      'stage-0'
    ],
    'plugins': [
      ['i18n-tag-translate', {
        'translation': translations
      }]
    ]
  }).bundle()
    .on('error', function (err) { console.error(err); this.emit('end'); })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'))
})