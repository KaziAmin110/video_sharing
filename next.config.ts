import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "snapcast-loom-clone.b-cdn.net",
        protocol: "https",
        port: "",
        pathname: "/**",
      },
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
        port: "",
        pathname: "/**",
      }
    ]
  }
};

export default nextConfig;
