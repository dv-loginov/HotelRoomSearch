const path = require('path');
const fs = require('fs');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const PATH_SRC = path.resolve(__dirname,'src');
const PATH_DIST = path.resolve(__dirname,'dist');

const PAGES_DIR = `${PATH_SRC}/pug/pages/`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'));

const fileName = ext => isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`;

module.exports = {

  context: PATH_SRC,
  mode: 'development',
  entry: './app.js',
  output: {
    filename: fileName('js'),
    path: PATH_DIST,
  },

  target: isDev ? 'web' : 'browserslist',

  devtool: isDev ? 'source-map' : false,

  resolve: {
    alias: {
      'src': PATH_SRC,
    }
  },

  devServer: {
    historyApiFallback: true,
    contentBase: PATH_DIST,
    open: true,
    compress: true,
    port: 8080,
  },

  plugins: [

    new CleanWebpackPlugin(),

    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`,
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd
      }
    })),


    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname,'src/static/favicon.ico'),
          to: PATH_DIST
        },
      ]
    }),

    new MiniCssExtractPlugin(
      {
        filename: fileName('css')
      }
    ),

  ],

  module: {

    rules: [

      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          'css-loader',
          'sass-loader'
        ],
      },

      {
        test: /\.pug$/,
        use: [ 'pug-loader' ],
      },

      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },

    ],

  },

};
