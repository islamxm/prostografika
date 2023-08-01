const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@hoc': path.resolve(__dirname, 'src/hoc'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@service': path.resolve(__dirname, 'src/service'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@utils': path.resolve(__dirname, 'src/utils')
      // '@context': path.resolve(__dirname, 'src/context'),
      // '@my-types': path.resolve(__dirname, 'src/types'),
    }
  }
};