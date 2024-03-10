/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['images.media.istockphoto.com'],
    remotePatterns:[
      {
        protocol: "https",
hostname: "*.google.com",

      }

    ]
  }
}

module.exports = nextConfig
