const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development';

// alternatively, use process.argv[1]
// const isDev = (process.argv[1] || '').indexOf(hjs-dev-server) !== -1

const webpack = require('webpack');
const fs      = require('fs');
const path    = require('path'),
      join    = path.join,
      resolve = path.resolve;

const getConfig = require('hjs-webpack');

const root    = resolve(__dirname);
const src     = join(root, 'src');
const modules = join(root, 'node_modules');
const dest    = join(root, 'dist');

var config = getConfig({
    isDev: isDev,
    in: join(src, 'src/app.js'),
    out: dest,
    clearBeforeBuild: true
});

module.exports = config;