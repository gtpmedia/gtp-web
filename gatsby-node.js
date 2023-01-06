const { printIntrospectionSchema } = require("graphql")
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicPage {
        nodes {
          id
          uid
          lang
          type
          url
        }
      }
    }
  `)

  pages.data.allPrismicPage.nodes.forEach(page => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, "src/templates/Page.js"),
      context: { ...page },
    })
  })

  const projects = await graphql(`
    {
      allPrismicHomepageBody1PortfolioGallery {
        nodes {
          children {
            id
          }
          items {
            external_video {
              url
            }
            video_title {
              raw
              text
            }
            video_description {
              raw
              text
            }
            artist {
              raw
              text
            }
            client {
              raw
              text
            }
          }
        }
      }
    }
  `)

  projects.data.allPrismicHomepageBody1PortfolioGallery.nodes[0].items.forEach(
    page => {
      createPage({
        path:
          "projects/" +
          page.video_title.text.replace(/\s+/g, "-").toLowerCase(),
        component: path.resolve(__dirname, "src/templates/Projects.js"),
        context: {
          title: page.video_title.text,
          url: page.external_video.url,
          description: page.video_description.raw,
          artist: page.artist.text,
          client: page.client.text,
        },
      })
    }
  )
}
