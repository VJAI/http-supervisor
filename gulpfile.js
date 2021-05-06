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

function createIndex(cb) {
  fs.writeFileSync(`${dist}/index.js`, `module.exports = require('./http.supervisor-${getVersion()}');`);
  cb();
}

function cleanDist() {
  return del(dist);
}

function buildLib() {
  return run('webpack')();
}

function buildLibMin() {
  return run(`webpack -p`)();
}

function copyFilesToDist() {
  return src([
    './package.json',
    'LICENSE',
    'README.md'
  ], { base: root }).pipe(dest(dist));
}

function deleteOldFiles() {
  return del(`${docs}/http.supervisor*.js`);
}

function copyFilesToDocs() {
  return src([dist, `http.supervisor-${getVersion()}.js`].join('/')).pipe(dest(docs));
}

function updateDocFile() {
  return src([docs, 'index.html'].join('/'))
    .pipe(replace(/http.supervisor-(?:\d[.]?)+js/g, `http.supervisor-${getVersion()}.js`))
    .pipe(dest(docs));
}

function createAddonFile(cb) {
  const contentString = fs.readFileSync(`${addon}/template.js`, 'utf8');
  let supervisorFileString = fs.readFileSync(`${dist}/http.supervisor-${getVersion()}.min.js`);
  supervisorFileString += `http.init();`;
  fs.writeFileSync(`${addon}/http.supervisor.js`, contentString.replace('<!--CONTENT-->', supervisorFileString).replace(`//# sourceMappingURL=http.supervisor-${getVersion()}.min.js.map`, ''));
  cb();
}

function getVersion() {
  const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
  return pkg.version;
}

exports.build = series(
  updateVersion,
  cleanDist,
  buildLib,
  buildLibMin,
  copyFilesToDist,
  createIndex,
  deleteOldFiles,
  copyFilesToDocs,
  updateDocFile
);
exports.build_addon = createAddonFile;
