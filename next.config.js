const rehypePrism = require("@mapbox/rehype-prism");
const withMDX = require("@next/mdx")({
  options: {
    rehypePlugins: [rehypePrism],
  },
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  images: {
    domains: ["images.unsplash.com"],
  },
  pageExtensions: ["js", "jsx", "tsx", "ts", "mdx"],
});
