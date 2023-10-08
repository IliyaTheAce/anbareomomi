/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "panel.anbareomomi.com",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
