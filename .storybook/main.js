const TreatPlugin = require("treat/webpack-plugin");

module.exports = {
  addons: [
    "@storybook/preset-typescript",
    "./.storybook/storybook-addon-treat-theme/register"
  ],
  stories: ["../components/**/*.stories.{js,jsx,ts,tsx}"],
  webpackFinal: async config => {
    config.plugins.push(new TreatPlugin());

    return config;
  }
};
