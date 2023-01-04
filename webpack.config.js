const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      clean: true,
      title: 'Project',
      template: './src/index.html',
    }),
    new WebpackManifestPlugin(),
    new MiniCssExtractPlugin(),
    new ESLintPlugin({ })
  ],
}
