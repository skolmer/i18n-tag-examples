/* eslint no-console:0 */
const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const connect = require('gulp-connect')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const browserify = require('browserify')
const runSequence = require('run-sequence')
const i18nTagSchema = require('i18n-tag-schema').default
const validateSchema = require('i18n-tag-schema').validateSchema

// use i18n-tag-schema to generate a JSON schema for your translations
gulp.task('generate-translation-schema', (cb) => {
  i18nTagSchema('./src', '\\.js$', './translation.schema.json', (output, type) => {
    console.log(output)
    if(type === 'success' || type === 'error') cb()
  })
})

gulp.task('validate-german-translation', function (cb) {
  validateSchema('./translations/translation.de.json', './translation.schema.json', (output, type) => {
      console.log(output)
      if(type === 'error' || type === 'success') cb(); // finished task
  })
})

gulp.task('validate-translations', function (cb) {
  validateSchema('./translations', './translation.schema.json', (output, type) => {
      console.log(output)
      if(type === 'error' || type === 'success') cb(); // finished task
  })
})

// Use i18n babel plugin to build a german release
gulp.task('build-release-de', () => {  
  browserify('./src/index.js', { debug: true }).transform('babelify', {
    'presets': [
      'es2015',
      'stage-0'
    ],
    'plugins': [
      ['i18n-tag-translate', {
        'translation': './translations/translation.de.json'
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


// default tasks

gulp.task('bundle', () => {
  browserify('./src/index.js', { debug: true }).transform('babelify', {
    'presets': [
      'es2015',
      'stage-0'
    ]
  }).bundle()
    .on('error', function (err) { console.error(err); this.emit('end'); })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('webserver', function () {
  connect.server()
})

gulp.task('watch', function () {
  gulp.watch('src/*.js', ['bundle'])
})

gulp.task('default', function () {
  runSequence('bundle', 'webserver', 'watch')
})