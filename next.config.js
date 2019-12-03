const withSass = require("@zeit/next-sass");

const nextConfig = {
  webpack: function(config, { dev, defaultLoaders }) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader"
      }
    });

    return config;
  }
};

module.exports = withSass(nextConfig);
