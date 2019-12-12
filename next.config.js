const withSass = require("@zeit/next-sass");
const Mode = require('frontmatter-markdown-loader/mode')
const FontminPlugin = require('fontmin-webpack')

const nextConfig = {
  compress:true,
  webpack: function(config, { dev, defaultLoaders }) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jp g|gif|webp)$/,
      use: {
        loader: "file-loader",
        options: {
          name: '[name].[ext]',
          outputPath: 'font/'
        }
      }
    });

    config.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: {
        mode: [Mode.BODY]
      }
    })

    config.plugins.push(
      new FontminPlugin({
        autodetect: true,
      })
    )

    return config;
  }
};

module.exports = withSass(nextConfig);
