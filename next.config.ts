import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/shivrajrathore',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
