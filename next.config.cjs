// next.config.cjs
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

module.exports = withPWA({
  ...nextConfig,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
    runtimeCaching,
  },
});
