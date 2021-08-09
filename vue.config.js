/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const WebpackShellPlugin = require('webpack-shell-plugin')
const path = require('path')

module.exports = {
  devServer: {
    writeToDisk: true
  },
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        prependData: `
          @import "@marlonapp/marlon-vue/src/assets/css/_variables.scss";
          @import "@marlonapp/marlon-vue/src/assets/css/mixins/_index.scss";
        `
      }
    }
  },
  runtimeCompiler: true,
  lintOnSave: true,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'development') {
      config.plugins.push(
        new WebpackShellPlugin({
          onBuildStart: [],
          onBuildEnd: [],
          onBuildExit: ['npm run postbuild'],
          dev: true
        })
      )
    }

    config.externals = [
      { vue: 'Vue' },
      { 'pixi.js': 'PIXI' },
      { '@marlonapp/marlon-lab': 'MARLON_LAB' },
      { '@marlonapp/marlon-vue': 'MARLON_VUE' }
    ]
  },
  chainWebpack: (config) => {
    //
  }
}
