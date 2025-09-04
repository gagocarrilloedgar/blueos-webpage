/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites () {
    return [
      {
        source: '/((?!privacy$).*)',
        destination: 'https://blue-desk.vercel.app/$1'
      }
    ]
  }
}

export default nextConfig
