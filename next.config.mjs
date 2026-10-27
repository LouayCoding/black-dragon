/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zsibupsnbpnoxzjmnpcl.supabase.co',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/register',
        destination: '/inschrijven',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
