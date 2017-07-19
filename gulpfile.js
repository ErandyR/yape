const gulp = require('gulp');
// const gulp-uglify = require('gulp-uglify');
// const gulp-obfuscate = require('gulp-obfuscate');
const sass = require('gulp-sass');

var config = {
  source: './src/',
  dist: './public/'
};
var paths = {
  html: "**/*.html",
  assets: "assets/",
  sass: "scss/**/.scss",
  mainSass: "scss/main.scss",
  viewHTML1: "view/view.html"
}
var sources = {
  assets: config.source + paths.assets,
  html: config.source + paths.html,
  sass: paths.assets + paths.sass,
  rootSass: config.source + paths.assets + paths.mainSass,
  viewHTML1: config.source + paths.assets + paths.viewHTML1
};
gulp.task('html', function() {
  gulp.src(sources.html)
    .pipe(gulp.dest(config.dist));
});

gulp.task('sass', function() {
  gulp.src(sources.rootSass)
    .pipe(sass({
      outputStyle: "compressed"
    }).on("error", sass.logError))
    .pipe(gulp.dest('./public/assets/css'));
});
gulp.task('view', function() {
  gulp.src(sources.viewHTML1)
    .pipe(gulp.dest(config.dist + paths.assets + 'views'))
})
gulp.task('llamarTarea', ['html', 'sass', 'view']);
