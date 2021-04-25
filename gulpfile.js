const { src, dest, series } = require('gulp');

const args   = require('yargs').argv,
  replace = require('gulp-replace'),
  fs = require('fs'),
  run = require('gulp-run-command').default;

const root = './',
  dist = './dist',
  docs = './docs';

function updateVersion() {
  return run(`npm version ${args.type || 'patch'} --no-git-tag-version`)();
}

function updateIndex() {
  return src('./index.js')
    .pipe(replace(/http.supervisor-(?:\d[.]?)+js/g, `http.supervisor-${getVersion()}.js`))
    .pipe(dest(root));
}

function buildLib() {
  return run(`webpack && webpack -p`)();
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

}

function publish() {
  return run(`cd dist && npm publish`)();
}

function publishAddon() {
  // TODO: Need to figure out!
}

function getVersion() {
  const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
  return pkg.version;
}

exports.build = series(
  updateVersion,
  updateIndex,
  buildLib,
  copyFilesToDist,
  copyFilesToDocs,
  updateDocFile
);
exports.build_addon = updateAddonFile;
exports.publish = publish;
exports.publish_addon = publishAddon;

// Testing
exports.updateDocFile = updateDocFile;
exports.updateIndex = updateIndex;
