const TreatPlugin = require("treat/webpack-plugin");

module.exports = {
  addons: [
    "@storybook/preset-typescript",
    "@storybook/addon-viewport/register",
    "@storybook/addon-a11y/register",
  ],
  stories: ["../components/**/*.stories.{js,jsx,ts,tsx}"],
  webpackFinal: async (config) => {
    config.plugins.push(new TreatPlugin());

    return config;
  },
};
