var path = require('path');

module.exports = {
  type: 'react-app',
  babel: {
    stage: 0,
    optional: ['runtime']
  },
  webpack: {
    extra: {
      // resolve: {
      //   alias: {
      //     'components': path.resolve(__dirname, 'src/components'),
      //     'css': path.resolve(__dirname, 'assets/css')
      //   }
      // },
      module: {
        loaders: [
          {
            test: /\.lookup$/,
            loaders: [
              'glob'
            ]
          }
        ]
      }
    }
  }
};
