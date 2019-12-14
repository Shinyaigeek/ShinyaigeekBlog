const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");
const Mode = require("frontmatter-markdown-loader/mode");
const FontminPlugin = require("fontmin-webpack");
const optimizedImages = require("next-optimized-images");
const fs = require("fs");

const dirN = function (dir) {
    return fs.readdirSync(dir)
}

const returnHome = function() {
  let items = {};
  const page = "/";
  items["/"] = {
    page: page
  };
  return items;
};

const returnPosts = function(itemN) {
  let posts = {};
  for (i = itemN; i >= 1; i--) {
    let path = "/post/" + i;
    posts[path] = {
      page: "/post/[item]",
    };
  }
  return posts;
};

const nextConfig = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    const itemN = dirN("./items").length;
    const posts = returnPosts(itemN);
    const homes = returnHome();
    const others = {
      "/privacypolicy": {
        page: "/privacypolicy"
      },
      "/profile": {
        page: "/profile"
      }
    };
    let all = {};
    all = Object.assign(others, posts);
    all = Object.assign(all, homes);
    return all;
  },
  compress: true,
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
    });

    config.plugins.push(
      new FontminPlugin({
        autodetect: true
      })
    );

    return config;
  }
};

module.exports = optimizedImages(withCss(withSass(nextConfig)));
