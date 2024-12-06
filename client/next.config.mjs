/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.linkupevents.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
