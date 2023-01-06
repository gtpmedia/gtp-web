const { faExpeditedssl } = require("@fortawesome/free-brands-svg-icons")
const linkResolver = require("./src/utils/linkResolver")

module.exports = {
  siteMetadata: {
    title: `GtP Media`,
    description: `A creative studio at the forefront of progressive change. We're leaders in video editing, graphics, audio, and media management for Democratic campaigns.`,
    author: `GtP`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        modalProps: {
          style: {
            overlay: {
              zIndex: 9,
              background: `linear-gradient(220deg, rgba(0,0,0,1) 0%, rgba(29, 72, 120, 0.75) 100%)`,
            },
            content: {
              border: `none`,
              background: `none`,
            },
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gtp`,
        short_name: `gtp`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gtp-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "gtpmedia",
        linkResolver: () => doc => linkResolver(doc),
        schemas: {
          homepage: require("./custom_types/homepage.json"),
          page: require("./custom_types/page.json"),
        },
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "https://player.vimeo.com/api/player.js",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
      },
    },
  ],
}
