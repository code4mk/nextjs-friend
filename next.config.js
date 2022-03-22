/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'my-value',
    dot: process.env
  },
  webpack: (config, { isServer }) => {
    // if (!isServer) {
    //   config.resolve.fallback.fs = false;
    // }
    return config;
  },

}

module.exports = nextConfig
