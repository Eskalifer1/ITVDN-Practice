const {series, parallel, watch, src, dest} = require("gulp");
let browserSync = require('browser-sync').create();
const pug = require("gulp-pug");

function watcher(cd){
    browserSync.init({
        server: {
            port: 9800,
            baseDir: "build"
        }
    })
    watch(`build/**/*`).on("change", browserSync.reload);
}
exports.watcher = watcher;

function view(){
    return src('source/templates/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(dest('build'))
}
exports.view = view;