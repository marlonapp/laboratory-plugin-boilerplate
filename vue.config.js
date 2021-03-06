/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const WebpackShellPlugin = require('webpack-shell-plugin')

module.exports = {
  devServer: {
    writeToDisk: true
  },
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@marlonapp/marlon-vue/src/assets/css/additional_data.scss";
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
      { '@marlonapp/marlon-vue': 'MARLON_VUE' },
      function (context, request, callback) {
        if (/^@pixi\/(?:.*)$/.test(request)) {
          // Externalize to a commonjs module using the request path
          return callback(null, 'PIXI')
        }

        // Continue without externalizing the import
        callback()
      }
    ]
  },
  chainWebpack: (config) => {
    config.module
      .rule('worker')
      .test(/\.worker\.ts$/)
      .use('worker-loader')
      .loader('worker-loader')

    config.module
      .rule('marlon-plugin')
      .test(/plugin\.ts$/)
      .use('marlon-loader')
      .options({ emit: false })
      .loader('@marlonapp/marlon-lab-plugin-loader')
  }
}
