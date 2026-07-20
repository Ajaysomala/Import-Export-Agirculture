/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // TODO(BACKEND): add your real image domains here once product photos
    // are served from Firebase Storage, e.g. 'firebasestorage.googleapis.com'
    remotePatterns: [
      { protocol: 'https', hostname: 'firebasestorage.googleapis.com' },
    ],
  },
};

module.exports = nextConfig;
