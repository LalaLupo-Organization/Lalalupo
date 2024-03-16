const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ["tailwindui.com"], // Add any domains you want to use with Next.js Image Optimization
  },
};

// const withBundleAnalyzerConfig = withBundleAnalyzer({
//   enabled: process.env.ANALYZE === "true",
// });
module.exports = nextConfig;
