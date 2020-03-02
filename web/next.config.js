/* eslint-disable no-undef */
const path = require('path');
const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withSASS = require('@zeit/next-sass');
const withImages = require('next-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === true,
});

const nextConfig = {
  distDir:
    process.env.NEXT_ENV === 'production'
      ? './dist/prod/.next'
      : './dist/dev/.next',
  env: {
    NEXT_ENV:
      process.env.NEXT_ENV === 'production' ? 'production' : 'development',
    CORE_URL: 'http://localhost:4000/graphql',
  },
  webpack(config) {
    config.module.rules = [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              eslintPath: require.resolve('eslint'),
              baseConfig: {
                extends: [require.resolve('eslint-config-react-app')],
              },
              ignore: true,
              useEslintrc: true,
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: [
          path.resolve(__dirname, './components'),
          path.resolve(__dirname, './pages'),
          path.resolve(__dirname, './screens'),
          path.resolve(__dirname, './utils'),
          path.resolve(__dirname, './state'),
          path.resolve(__dirname, './assets'),
        ],
      },
      ...config.module.rules,
    ];
    config.resolve.alias.assets = path.join(__dirname, 'assets');
    config.resolve.alias.components = path.join(__dirname, 'components');
    config.resolve.alias.config = path.join(__dirname, 'config');
    config.resolve.alias.pages = path.join(__dirname, 'pages');
    config.resolve.alias.screens = path.join(__dirname, 'screens');
    config.resolve.alias.states = path.join(__dirname, 'states');
    config.resolve.alias.utils = path.join(__dirname, 'utils');
    return config;
  },
};

module.exports = withPlugins(
  [
    [withCSS, { cssModules: true }],
    [withSASS, { cssModules: true }],
    withImages,
    withBundleAnalyzer,
  ],
  nextConfig,
);
