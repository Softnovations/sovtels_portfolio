import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/demo",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
