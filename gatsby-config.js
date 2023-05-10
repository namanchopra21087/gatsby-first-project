/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `d3bbxhh5ae9l`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-image`,
  ],
  siteMetadata:{
    description:"Ingenuity",
    title:"THG Ingenuity Platform Product Description"
  }
}
