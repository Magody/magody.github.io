const withTM = require('next-transpile-modules')(['three']);

module.exports = withTM({
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
})
