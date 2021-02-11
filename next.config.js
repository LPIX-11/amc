const withPlugins = require('next-compose-plugins')

const nextConfig = {
  images: {
    domains: ['s3.amazonaws.com']
  }
}

module.exports = withPlugins([], nextConfig)