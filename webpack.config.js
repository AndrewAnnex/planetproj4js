const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'planetproj4js.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'PlanetProj4js',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  externals: {
    'proj4': {
      commonjs: 'proj4',
      commonjs2: 'proj4',
      amd: 'proj4',
      root: 'proj4' 
    }
  }
};
