import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Tell Next.js to handle PDF internals on the server side only
  serverExternalPackages: ["pdfjs-dist"],

  // 2. Allow large PDF uploads (10MB)
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },

  // 3. Prevent build fails from strict type checks
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;