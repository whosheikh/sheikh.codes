const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
})

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "v0.blob.com",
      "public.bnbstatic.com",
      "cdn.bio.link",
      "sheikh.codes",
      "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      "github-readme-stats.vercel.app",
      "img.shields.io",
      "camo.githubusercontent.com",
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizeCss: true,
    serverActions: true,
  },
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
}

module.exports = withPWA(withBundleAnalyzer(nextConfig))

