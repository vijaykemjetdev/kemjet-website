/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/privacy', destination: '/policy', permanent: true },
      { source: '/privacy-policy', destination: '/policy', permanent: true },
      { source: '/terms', destination: '/terms&conditions', permanent: true },
      { source: '/terms-and-conditions', destination: '/terms&conditions', permanent: true },
    ]
  },
}

export default nextConfig
