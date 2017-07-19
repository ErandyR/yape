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
    views: "views/",
    viewHTML2: "views/view2.html",
    viewHTML3: "views/view3.html"
}
var sources = {
    assets: config.source + paths.assets,
    html: config.source + paths.html,
    sass: paths.assets + paths.sass,
    rootSass: config.source + paths.assets + paths.mainSass,
    viewHTML2: config.source + paths.viewHTML2,
    viewHTML3: config.source + paths.viewHTML3
};
gulp.task('html', function () {
    gulp.src(sources.html)
        .pipe(gulp.dest(config.dist));
});

gulp.task('sass', function () {
    gulp.src(sources.rootSass)
        .pipe(sass({
            outputStyle: "compressed"
        }).on("error", sass.logError))
        .pipe(gulp.dest('./public/assets/css'));
});
gulp.task('view2', function () {
    gulp.src(sources.viewHTML2)
        .pipe(gulp.dest(config.dist + paths.views));
});
gulp.task('view3', function () {
    gulp.src(sources.viewHTML3)
        .pipe(gulp.dest(config.dist + paths.views));
});
gulp.task('llamarTareas', ['html', 'sass', 'view2', 'view3']);
