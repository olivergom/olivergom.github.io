/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/daycare-site",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;