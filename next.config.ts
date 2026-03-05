import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://www.clipartmax.com/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png')],
  },
};

export default nextConfig;
