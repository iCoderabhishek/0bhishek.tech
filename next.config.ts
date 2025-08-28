import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [new URL('https://pbs.twimg.com/profile_images/1792263106363564032/84ENGWSS_400x400.jpg/**')],
  },
};

export default nextConfig;
