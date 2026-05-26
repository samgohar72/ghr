const nextConfig = {
  images: {
    unoptimized: true,
  },
  typescript: {
    // Ignore TypeScript build errors for deployment
    ignoreBuildErrors: true,
  },
  eslint: {
    // Don't run linting during build
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
