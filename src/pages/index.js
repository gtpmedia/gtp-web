import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import SliceZone from "../components/SliceZone"
import { withPreview } from "gatsby-source-prismic"

const Homepage = ({ data }) => {
  if (!data) return null
  const document = data.allPrismicHomepage.edges[0].node.data

  const heroContent = {
    title: document.title,
    background_video: document.background_video,
    background_image: document.background_image,
  }

  return (
    <Layout isHomepage>
      <SEO title="Home" />
      <Hero heroContent={heroContent} />
      <SliceZone sliceZone={document.body} />
      <SliceZone sliceZone={document.body2} />
      <SliceZone sliceZone={document.body1} />
    </Layout>
  )
}

export const query = graphql`
  query Homepage {
    allPrismicHomepage {
      edges {
        node {
          data {
            title {
              raw
            }
            background_video {
              url
            }
            background_image {
              url
            }
            body {
              ... on PrismicHomepageBodyFeaturedContent {
                slice_type
                primary {
                  text_box {
                    raw
                  }
                }
                items {
                  featured_poster {
                    fluid(maxHeight: 600) {
                      ...GatsbyPrismicImageFluid
                    }
                  }
                  featured_title {
                    raw
                  }
                  featured_subtitle {
                    raw
                    text
                  }
                  featured_link {
                    url
                    type
                    uid
                  }
                }
              }
            }
            body2 {
              ... on PrismicHomepageBody2ServicesList {
                slice_type
                primary {
                  services_title {
                    raw
                  }
                  services_description {
                    raw
                  }
                }
                items {
                  service {
                    raw
                  }
                  description {
                    raw
                  }
                }
              }
            }
            body1 {
              ... on PrismicHomepageBody1PortfolioGallery {
                slice_type
                items {
                  video_thumbnail {
                    fluid(maxHeight: 300, maxWidth: 400) {
                      ...GatsbyPrismicImageFluid
                    }
                  }
                  external_video {
                    url
                  }
                  video_title {
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
                  video_description {
                    raw
                    text
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default withPreview(Homepage)
