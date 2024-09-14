// Import the bundle analyzer
import withBundleAnalyzer from '@next/bundle-analyzer';

// Enable bundle analyzer based on the environment variable
const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true', // Enable only when ANALYZE environment variable is set to 'true'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
    ],
  },
};

// Export the configuration wrapped with the bundle analyzer
export default withAnalyzer(nextConfig);
