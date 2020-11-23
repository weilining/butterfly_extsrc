var gulp = require('gulp')
// var uglify = require('gulp-uglify')
// var babel = require('gulp-babel')
var rename = require('gulp-rename')
var uglifyjs = require('terser')
var composer = require('gulp-uglify/composer')
var pump = require('pump')
var minify = composer(uglifyjs, console)

// minify js babel
// gulp.task('compress', () =>
//   gulp.src('./src/**/*.js')
//     .pipe(babel({
//       presets: ['@babel/preset-env']
//     }))
//     .pipe(rename({
//       suffix: '.min'
//     }))
//     .pipe(uglify().on('error', function (e) {
//       console.log(e)
//     }))
//     .pipe(gulp.dest('./dist'))
// )

gulp.task('compress', function (cb) {
  var options = {}
  pump([
    gulp.src('./src/**/*.js')
    .pipe(rename({
      suffix: '.min'
    })),
    minify(options),
    gulp.dest('./dist')
  ],
  cb
  )
})

// 執行 gulp 命令時執行的任務
// 執行 gulp 命令時執行的任務
gulp.task('default', gulp.parallel(
  'compress'
))
