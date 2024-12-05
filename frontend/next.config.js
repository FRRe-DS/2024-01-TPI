module.exports = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "res.cloudinary.com",
            port: '',
            pathname: '/dee4c69ul/**',
          },
        ],
      },
      reactStrictMode: true,
      productionBrowserSourceMaps: true, // Habilita los source maps para producción.
      webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.fallback = {
            fs: false,
            path: false,
          };
        }
        return config;
      },
  }