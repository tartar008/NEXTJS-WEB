const path = require('path');

module.exports = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/NEXTJS-WEB',      // ตั้ง basePath ให้ตรงกับ GitHub Pages repo name
  assetPrefix: '/NEXTJS-WEB/',   // assetPrefix ต้องเหมือน basePath ไม่มี / ท้าย
  trailingSlash: true,
  webpack: (config: { resolve: { alias: { [x: string]: any; }; }; }) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};
