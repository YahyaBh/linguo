/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["placeholder.com"],
    unoptimized: true,
  },
  i18n: {
    locales: ["fr", "ar"],
    defaultLocale: "fr",
  },
}

module.exports = nextConfig
