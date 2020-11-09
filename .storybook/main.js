const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.mdx'],
  addons: [
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
  ],
  webpackFinal: (config) => {
    config.resolve.alias['core-js/modules'] = '@storybook/core/node_modules/core-js/modules';
    config.module.rules[3].use = 'html-loader?minimize=false';

    config.module.rules.push({
      test: /\.js$/,
      use: ['babel-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
};
