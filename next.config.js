const withSass = require("@zeit/next-sass");
const Mode = require("frontmatter-markdown-loader/mode");

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
      query: {
        item: i
      }
    };
  }
  return posts;
};

const nextConfig = {
  compress: true,
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    // const itemN = dirN("./items").length;
    // const itemList = getFileContent(itemN);
    const posts = returnPosts(26);
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

    return config;
  }
};

module.exports = withSass(nextConfig);
