
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* existing config options */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
      },
    ],
  },

  // Redirect non-www to www
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "venastechnology.com", // non-www version
          },
        ],
        destination: "https://www.venastechnology.com/:path*", // redirect to www
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
