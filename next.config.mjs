/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects () {
    return [
      { source: '/login', destination: '/waitlist', permanent: false },
      { source: '/signup', destination: '/waitlist', permanent: false }
    ]
  }
}

export default nextConfig
