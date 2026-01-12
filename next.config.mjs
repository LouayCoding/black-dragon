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
}

export default nextConfig
