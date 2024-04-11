/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ["tailwindui.com", "img.clerk.com"], // Add any domains you want to use with Next.js Image Optimization
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      loader: "svg-inline-loader",
    })
    return config
  },
}

// const withBundleAnalyzerConfig = withBundleAnalyzer({
//   enabled: process.env.ANALYZE === "true",
// });
module.exports = nextConfig
