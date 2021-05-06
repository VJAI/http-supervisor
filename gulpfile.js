const { src, dest, series } = require('gulp');
const del = require('del');

const args   = require('yargs').argv,
  replace = require('gulp-replace'),
  fs = require('fs'),
  run = require('gulp-run-command').default;

const root = './',
  dist = './dist',
  docs = './docs',
  addon = './addon';

function updateVersion() {
  return run(`npm version ${args.type || 'patch'} --no-git-tag-version`)();
}

function updateIndex() {
  return src('./index.js')
    .pipe(replace(/http.supervisor-(?:\d[.]?)+js/g, `http.supervisor-${getVersion()}.js`))
    .pipe(dest(root));
}

function cleanDist() {
  return del(dist);
}

function buildLib(mode) {
  return run('webpack')();
}

function buildLibMin(mode) {
  return run(`webpack -p`)();
}

function copyFilesToDist() {
  return src([
    './package.json',
    'LICENSE',
    'README.md',
    'index.js'
  ], { base: root }).pipe(dest(dist));
}

function copyFilesToDocs() {
  return src([dist, `http.supervisor-${getVersion()}.js`].join('/')).pipe(dest(docs));
}

function updateDocFile() {
  return src([docs, 'index.html'].join('/'))
    .pipe(replace(/http.supervisor-(?:\d[.]?)+js/g, `http.supervisor-${getVersion()}.js`))
    .pipe(dest(docs));
}

function updateAddonFile() {
  throw new Error('Not Implemented');
}

function publish() {
  throw new Error('Not Implemented');
}

function publishAddon() {
  throw new Error('Not Implemented');
}

function getVersion() {
  const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
  return pkg.version;
}

function readBuildFile() {
  return fs.readFileSync(`${dist}/http.supervisor-${getVersion()}.min.js`, 'utf8');
}

exports.build = series(
  updateVersion,
  updateIndex,
  cleanDist,
  buildLib,
  buildLibMin,
  copyFilesToDist,
  copyFilesToDocs,
  updateDocFile
);
exports.build_addon = updateAddonFile;
exports.publish = publish;
exports.cleanDist = publishAddon;
