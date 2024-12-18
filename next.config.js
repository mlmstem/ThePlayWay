/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["example.com", "cdn.example.com"],
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = { fs: false }; // Polyfill for client-side
    }
    return config;
  },
  eslint: {
    dirs: ["src"],
  },
  i18n: {
    locales: ["en", "fr", "es"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;

