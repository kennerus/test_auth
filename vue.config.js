const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  productionSourceMap: false,
  parallel: false,
  devServer: {
    // https: true,
    proxy: {
      '^/(api)': {
        target: 'https://jobboo.tw1.su',
        changeOrigin: true,
        // Хедер-метка; ответ на запрос пришел через этот прокси.
        onProxyRes(proxyRes, req, res) {

        }
      }
    },
    watchOptions: {
      poll: true,
      ignored: /node_modules/
    },
  },
  assetsDir: 'assets',
  runtimeCompiler: true,
  configureWebpack: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          default: false,
          common: false,
          styles: {
            name: 'app',
            test: /\.(s?css|vue)$/, // chunks plugin has to be aware of all kind of files able to output css in order to put them together
            chunks: 'initial',
            minChunks: 1,
            enforce: true
          }
        }
      }
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'assets/css/[name].css',
        chunkFilename: "assets/css/[id].css"
      }),
    ],
    devtool: 'source-map',
  },

};
