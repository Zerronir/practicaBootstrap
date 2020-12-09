const gulp = require('gulp');
const { watch, src, dest } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const CompSass = require('gulp-sass');

/* Watchers per al scss */
function sass(){
    return src('./src/sass/**/*.scss')
        .pipe(CompSass())
        .pipe(dest('css/'))
}

function watcherSass() {
    watch('./src/sass/**/*.scss', sass);
}

/* Funció o tarea per a minimitzar el css */
function minifyCSS(){
    return src('./src/css/*.css')
        .pipe(cleanCSS())
        .pipe(dest('dist/css/'));
}

exports.sass = sass;
exports.watcher = watcherSass;
exports.minCSS = minifyCSS;
