/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  images: {
    domains: ["bizzilo-dev-media.s3.amazonaws.com"],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },

  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },

  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },

  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig;