const gulpCopy = require('gulp-copy');
const fs = require('fs');
const bump = require('gulp-update-version');
const { src, dest } = require('gulp');
const args   = require('yargs').argv;
const root = './';

async function updateVersion() {
  const versionType = args.type || 'patch';

  return src(['./package.json', './package-lock.json'])
    .pipe(bump({ type: versionType }))
    .pipe(dest(root));
}

function updateFileReferences() {

}

function copyToDocs() {
  /*return src('dist/*.js')
    .pipe(gulpCopy(outputPath))
    .pipe(dest('output/'));*/
}

function publish() {

}

function createFileForAddon() {

}

exports.updateVersion = updateVersion;
exports.copyToDocs = copyToDocs;
