const path = require('path')
const merge = require('webpack-merge')
const commonCfg = require('./webpack.common')
const { name } = require('../package.json')

module.exports = merge(commonCfg, {
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: './bundle.js',
    libraryTarget: 'umd',
    library: `${name}-[name]`,
    jsonpFunction: `webpackJsonp_${name}`,
    globalObject: 'window'
  }
})
