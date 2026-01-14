
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

 async redirects() {
  return [
    {
      source: "/:path*",
      has: [
        {
          type: "host",
          value: "venastechnology.com", // non-www
        },
      ],
      destination: "https://www.venastechnology.com/:path*", // www version
      permanent: true, // <- THIS MAKES IT 301
    },
  ];
}
};

export default nextConfig;
