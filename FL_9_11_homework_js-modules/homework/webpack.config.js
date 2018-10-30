
const path = require('path');

module.exports = {
  entry: './src/js/output-module.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
