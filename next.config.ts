import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eye-care.cmsmasters.net/",
      },
    ],
  },
};

export default nextConfig;
