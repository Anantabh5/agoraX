/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Add custom webpack configurations here
      config.module.rules.push({
        test: /\.node$/,
        loader: 'file-loader',
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  