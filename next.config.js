const withSass = require("@zeit/next-sass");
const Mode = require('frontmatter-markdown-loader/mode')
const withPurgeCss = require('next-purgecss')

const nextConfig = {
  compress:true,
  webpack: function(config, { dev, defaultLoaders }) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jp g|gif|webp)$/,
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

module.exports = withPurgeCss(withSass(nextConfig));
