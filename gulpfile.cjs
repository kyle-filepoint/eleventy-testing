const gulp = require('gulp');
const rollup = require("rollup");
const resolve = require('@rollup/plugin-node-resolve');
const babel = require('@rollup/plugin-babel');
const del = require('del');
const spawn = require('cross-spawn');


async function javascript() {
    var bundle = await rollup.rollup({
        input: './src/assets/js/app.js',
        plugins: [resolve(), babel({ babelHelpers: 'bundled' })]
    })

    return bundle.write({
        file: './dist/assets/js/app.js',
        format: 'iife'
    })
}


function clean() {
    return del.deleteAsync([
        'dist/**/*'
    ])
}

function eleventy() {
    return spawn('npx', ['@11ty/eleventy', '--serve'], { stdio: 'inherit' })
}

async function openBrowser() {
    const open = (await import('open')).default
    return open('http://localhost:8000')
}

function watchScripts() {
    return gulp.watch('./src/assets/js/**/*.js', javascript);
}


exports.watch = gulp.series(clean, gulp.parallel(javascript, eleventy, openBrowser), watchScripts);