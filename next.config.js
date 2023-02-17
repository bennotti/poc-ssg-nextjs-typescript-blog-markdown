/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      unoptimized: true
  },
  reactStrictMode: true,
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
    }
  },
}

module.exports = nextConfig
