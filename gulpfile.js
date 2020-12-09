const gulp = require('gulp');
const { watch, src, dest, parallel } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const CompSass = require('gulp-sass');

/* Watchers per al scss */
function sass(){
    return src('./public_html/sass/**/*.scss')
        .pipe(CompSass())
        .pipe(dest('./public_html/css/'))
}

/* Funció o tarea per a minimitzar el css */
function minifyCSS(){
    return src('./public_html/css/*.css')
        .pipe(cleanCSS())
        .pipe(dest('public_html/css/'));
}

function watcherSass() {
    watch('./public_html/sass/**/*.scss', sass);
}

function watcherCSS(){
    watch('./public_html/css/**/*.css', minifyCSS);
}

// Tasques
exports.sass = sass;
exports.watcher = watcherSass;
exports.minCSS = minifyCSS;
