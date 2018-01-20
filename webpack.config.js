let defaultConfig = {
  externals: {
  },
  entry: {
    index: './index.js',
  },
  output: {
    filename: './dist/n-tools.js',
    library: 'nTools',
    libraryTarget: 'umd',
  },
  module: {
  },
  plugins: [
  ],
  resolve: {
    alias: {
      'base': __dirname + '/src',
    },
  },
};

module.exports = defaultConfig;