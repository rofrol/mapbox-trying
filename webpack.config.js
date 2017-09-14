const path = require('path');

const webpackConfig = {
  entry: ['./index'], // file extension after index is optional for .js files
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /.jsx?$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {
                targets: {
                  browsers: ['last 2 Chrome versions'],
                },
                modules: false,
              }],
            ],
            plugins: [
              ['transform-object-rest-spread',
                {
                  useBuiltIns: true,
                },
              ],
            ],
          },
        }],
      },
    ],
  },
};

module.exports = webpackConfig;
