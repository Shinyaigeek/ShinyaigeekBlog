const withSass = require("@zeit/next-sass");
const Mode = require('frontmatter-markdown-loader/mode')

const nextConfig = {
  compress:true,
  webpack: function(config, { dev, defaultLoaders }) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jp g|gif)$/,
      use: {
        loader: "url-loader"
      }
    });

    config.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: {
        mode: [Mode.BODY]
      }
    })

    return config;
  }
};

module.exports = withSass(nextConfig);
