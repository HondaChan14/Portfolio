/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Jason-Portfolio-2023`,
    siteUrl: `jasonjugo.dev`
  },
  plugins: ["gatsby-plugin-vanilla-extract", "gatsby-plugin-mdx", "gatsby-plugin-netlify", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};