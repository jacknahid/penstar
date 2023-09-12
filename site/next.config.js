/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Penstar',
    description: 'Penstar Workspace Registry for KASM Tech.',
    icon: '/https://www.penstarz.com/wp-content/uploads/2023/05/logo.png',
    listUrl: 'https://jacknahid.github.io/penstar/',
    contactUrl: 'https://github.com/jacknahid/penstar/issues/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
