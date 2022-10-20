const {series, parallel, watch, src, dest} = require("gulp");
let browserSync = require('browser-sync').create();
const pug = require("gulp-pug");
let sass = require("gulp-sass")(require("sass"));
const spritesmith = require('gulp.spritesmith');
const rimraf = require("rimraf");
const rename = require("gulp-rename");

// Watch editions
function watcher(){
    browserSync.init({
        server: {
            port: 9800,
            baseDir: "build"
        }
    });
    watch(`build/**/*.*`).on("change", browserSync.reload);
    watch('source/templates/**/*.pug', {usePolling : true}, series(view));
    watch('source/styles/**/*.scss', {usePolling : true}, series(scss2css));
}
exports.watcher = watcher;

// Compile pug into HTML
function view(){
    return src('source/templates/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(dest('build'))
}
exports.view = view;

// Compile scss to css
function scss2css(){
    return src("source/styles/main.scss")
    .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
    .pipe(rename("main.min.css"))
    .pipe(dest("build/css"));
}
exports.scss2css = scss2css;

// compile sprites
function sprite(cb){
    let spriteData = src("source/images/icons/*.png")
    .pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.scss',
        algorithm: 'binary-tree',
        imgPath: '../images/sprite.png'
    }))
    spriteData.img.pipe(dest('build/images/'));
    spriteData.css.pipe(dest("source/styles/global/"));
    cb();
}
exports.sprite = sprite;

// Delete old files
function clean(cb){
    return rimraf('build', cb);
}
exports.clean = clean;

// Copy
function copyImages(){
    return src('source/images/*.*')
    .pipe(dest("build/images"))
}
exports.copyImages = copyImages;

function copyFonts(){
    return src('source/fonts/*.*')
    .pipe(dest("build/fonts"))
}
exports.copyFonts = copyFonts;

exports.default = series(
    series(clean),
    parallel(view, scss2css, sprite, copyFonts, copyImages),
    series(watcher)
)