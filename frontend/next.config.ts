import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  output: "export",
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sap-automation-bucket.s3.amazonaws.com",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
