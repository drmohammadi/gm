/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // مهم برای Vercel
  experimental: {
    turbo: {
      // اگر Turbopack مشکل داره، این رو خاموش کن
    }
  },

  webpack: (config) => {
    config.resolve.fallback = { 
      fs: false, 
      net: false, 
      tls: false 
    };
    return config;
  },
};

export default nextConfig;
