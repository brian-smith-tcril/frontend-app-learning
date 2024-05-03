const { merge } = require('webpack-merge');

const path = require('path');
const { createConfig } = require('@openedx/frontend-build');

const config = createConfig('webpack-dev');

config.resolve.alias = {
  ...config.resolve.alias,
  '@src': path.resolve(__dirname, 'src'),
};

module.exports = merge(config, {
  devServer: {
    allowedHosts: 'all',
  },
});
