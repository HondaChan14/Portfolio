/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Jason-Portfolio-2023`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-vanilla-extract", "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};