/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'user-images.githubusercontent.com',
      'avatars.githubusercontent.com',
      'camo.githubusercontent.com',
      'velog.velcdn.com',
      'leetcard.jacoblin.cool',
    ],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
