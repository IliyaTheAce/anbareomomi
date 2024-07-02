/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "panel.ejarecantiner.com",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
