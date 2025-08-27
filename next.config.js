/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["bizzilo-dev-media.s3.amazonaws.com"],
  }
  // You do not need redirects for '/en' because Next.js will handle clean URLs for default locale
};

module.exports = nextConfig;
