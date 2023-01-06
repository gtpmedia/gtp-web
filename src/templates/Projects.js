import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import { RichText } from "prismic-reactjs"
import VideoModal from "../components/ui/VideoModal"
import VideoPlayer from "../components/ui/VideoPlayer"
import {
  StyledContainer,
  StyledCredits,
  StyledCreditsLabel,
} from "../components/styles/Projects.styled.js"
import BackButton from "../components/ui/BackButton"

function Projects(props) {
  const { pageContext } = props

  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <div>
          {modal ? (
            <VideoModal
              url={pageContext.url}
              title={pageContext.title}
              description={pageContext.description}
              artist={pageContext.artist}
              client={pageContext.client}
              playing={true}
              closeTo={closeTo}
            />
          ) : (
            <Layout>
              <SEO title={`Projects | ${pageContext.title}`} />
              <StyledContainer maxWidth="md">
                <VideoPlayer url={pageContext.url} playing={false} />
                <h1>{pageContext.title}</h1>
                <StyledCredits>
                  <StyledCreditsLabel>Artist:</StyledCreditsLabel>{" "}
                  {pageContext.artist}
                  <br />
                  <StyledCreditsLabel className="credits-label">
                    Client:
                  </StyledCreditsLabel>{" "}
                  {pageContext.client}
                </StyledCredits>
                <RichText render={pageContext.description} />
                <BackButton url="/#portfolio" />
              </StyledContainer>
            </Layout>
          )}
        </div>
      )}
    </ModalRoutingContext.Consumer>
  )
}

export default Projects
