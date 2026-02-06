/** @type {import('next').NextConfig} */
const nextConfig = {
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
