const {series, parallel, watch} = require("gulp");
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