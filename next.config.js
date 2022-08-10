const withTM = require('next-transpile-modules')(['three']);
// const nextTranslate = require('next-translate')

module.exports = withTM({
  reactStrictMode: true,
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  // assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  // ...nextTranslate()
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  }
})
