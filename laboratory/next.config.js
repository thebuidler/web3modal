/** @type {import('next').NextConfig} */

// Only required within the scope of this monorepo
const nextConfig = {
  transpilePackages: [
    '@web3modal/ethereum',
    '@thebuidler/web3modal-ui-mod',
    '@thebuidler/web3modal-ui-mod',
    '@web3modal/core'
  ],
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
