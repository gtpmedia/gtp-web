import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader"
import SliceZone from "../components/SliceZone"

const Page = ({ data }) => {
  if (!data) return null
  const document = data.allPrismicPage.edges[0].node.data
  const headerContent = {
    title: document.title,
    description: document.description,
    bannerImage: document.banner_image,
  }

  const capitalizeFirstLetter = input => {
    return input[0].toUpperCase() + input.slice(1)
  }

  return (
    <Layout>
      <SEO title={capitalizeFirstLetter(document.title.text)} />
      <PageHeader headerContent={headerContent} />
      <SliceZone sliceZone={document.body} />
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($uid: String) {
    allPrismicPage(filter: { uid: { eq: $uid } }) {
      edges {
        node {
          uid
          data {
            banner_image {
              alt
              fluid(maxWidth: 1080, maxHeight: 1080) {
                ...GatsbyPrismicImageFluid
              }
            }
            title {
              raw
              text
            }
            description {
              raw
            }
            body {
              ... on PrismicPageBodyText {
                id
                slice_type
                primary {
                  text {
                    raw
                  }
                }
              }
              ... on PrismicPageBodyQuote {
                id
                slice_type
                primary {
                  caption {
                    raw
                    text
                  }
                  photo {
                    alt
                    fluid(maxWidth: 1000, maxHeight: 800) {
                      ...GatsbyPrismicImageFluid
                    }
                  }
                  quote {
                    raw
                    text
                  }
                }
              }
              ... on PrismicPageBodyBannerWithCaption {
                id
                slice_type
                primary {
                  image_banner {
                    alt
                    fluid(maxWidth: 1200, maxHeight: 600) {
                      ...GatsbyPrismicImageFluid
                    }
                  }
                  title_of_banner {
                    raw
                    text
                  }
                  description {
                    raw
                    text
                  }
                }
              }
              ... on PrismicPageBodyVimeo {
                id
                primary {
                  vimeo {
                    html
                    embed_url
                  }
                  caption {
                    raw
                    text
                  }
                }
                slice_type
              }
            }
          }
        }
      }
    }
  }
`

export default Page
