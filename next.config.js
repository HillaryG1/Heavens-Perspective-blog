/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
  },
  // Add environment variables
  env: {
    FIREBASE: process.env.FIREBASE,
  },
  // Add these settings to help with SSR/SSG issues
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // This ensures proper handling of app directory features
    appDir: true,
  },
  // This helps with handling client-side features during SSR
  compiler: {
    // Enables emotion for CSS-in-JS if you're using it
    emotion: false,
    // Remove console.logs in production
    removeConsole: process.env.NODE_ENV === "production",
  },
  // This helps prevent certain SSR issues
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
