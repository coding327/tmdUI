const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass')) // sass --> css
const minifyCSS = require('gulp-minify-css') // 压缩css代码

// 注册一个任务
const handleSass = function () {
  return gulp.src('components/css/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
}

module.exports.handleSass = handleSass