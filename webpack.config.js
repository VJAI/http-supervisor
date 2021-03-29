import pkg from './package.json';
import yargs from 'yargs';

const { optimizeMinimize } = yargs.alias('p', 'optimize-minimize').argv;
const version = pkg.version;

export default {
  mode: 'production',
  entry: { app: './index.js' },
  output: {
    path: __dirname,
    filename: optimizeMinimize ? `http.supervisor-${version}.min.js` : `http.supervisor-${version}.js`,
    library: 'httpSupervisor',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader', enforce: 'pre' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  devtool: optimizeMinimize ? 'source-map' : false
};

