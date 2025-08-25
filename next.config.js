/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["bizzilo-dev-media.s3.amazonaws.com"],
  },
  // i18n: {
  //   locales: ['en', 'fr', 'es'],
  //   defaultLocale: 'en',
  //   localeDetection: false,  // prevents auto "/en"
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: '/en/:path*',         // any English URL
  //       destination: '/:path*',       // redirect to clean URL
  //       permanent: true,
  //     },
  //   ]
  // }
};

module.exports = nextConfig;
