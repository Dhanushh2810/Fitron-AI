import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
   
  },
  images: {
    domains: ["images.unsplash.com", "cdn.example.com"],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
