/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "https://firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
