import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // Helps reduce hydration warnings
  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
  },
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error']
    } : false,
  },
  // Optimize for React 19
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
  
};



export default nextConfig;
