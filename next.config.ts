const path = require('path');

module.exports = {
  reactStrictMode: true,
  output: 'export',
  webpack: (config: { resolve: { alias: { [x: string]: any; }; }; }) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};
