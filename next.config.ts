import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  crossOrigin: 'anonymous',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "covers.openlibrary.org",
        port: "",
        pathname: "/b/id/**",
      },
      {
        protocol: "https",
        hostname: "openlibrary.org",
        port: "",
        pathname: "/images/icons/**",
      }
    ],
  },
};

export default nextConfig;
