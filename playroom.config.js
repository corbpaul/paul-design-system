const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TreatPlugin = require('treat/webpack-plugin');

const include = [
  path.join(__dirname, './components'),
  path.join(__dirname, './playroom'),
  path.join(__dirname, './reset'),
  path.join(__dirname, './themes'),
  path.join(__dirname, './utils'),
];

module.exports = {
  components: './components/index.ts',
  outputPath: './site/dist/playroom',

  // Optional:
  title: 'Paul Design System',
  themes: './themes/index.ts',
  frameComponent: './playroom/FrameComponent.tsx',
  widths: [320, 768, 1024, 1400],
  port: 9000,
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          include,
          use: [
            {
              loader: require.resolve('babel-loader'),
              options: {
                presets: [
                  '@babel/preset-typescript',
                  '@babel/preset-env',
                  '@babel/preset-react',
                ],
                plugins: []
              }
            },
          ]
        }
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx'],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: `[name].css`,
        chunkFilename: `[name].css`,
      }),
      new webpack.HashedModuleIdsPlugin(),
      new TreatPlugin({
        test: {
          test: /\.treat\.ts$/,
          include,
        },
        outputLoaders: [MiniCssExtractPlugin.loader]
      }),
    ],
  }),
};
