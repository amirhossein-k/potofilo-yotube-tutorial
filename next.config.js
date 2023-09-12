/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uploade.storage.iran.liara.space",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
