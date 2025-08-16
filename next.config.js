// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // disables ESLint checks during build & dev
  },
   images: {
    domains: ["bizzilo-dev-media.s3.amazonaws.com"],
  },
    // i18n: {
    //   locales: ['en', 'fr', 'es'],
    //   defaultLocale: 'en',
    //   localeDetection: true,
    // },
  };
  
  module.exports = nextConfig;
  