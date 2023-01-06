import React from "react"
import { RichText } from "prismic-reactjs"
import { Container, Grid } from "@material-ui/core"
import styled from "styled-components"
import Image from "gatsby-image"

const BannerGrid = styled(Grid)`
  position: relative;
  margin: 0;
  padding: 0;
`

const BannerTitle = styled.div`
  h2 {
    padding: 10px;
    margin: auto;
    font-family: ${({ theme }) => theme.fontSerif};
    font-size: 1.5em;
    color: ${({ theme }) => theme.colorBlue};
  }
  @media only screen and (min-width: 960px) {
    position: absolute;
    width: 100%;
    bottom: 50%;
    left: 50%;
    width: 85%;
    transform: translate(-50%, 50%);
    z-index: 10;
    h2 {
      margin: auto;
      font-size: 2.5em;
      font-style: italic;
      color: #ffffff;
    }
  }
`

const CaptionContainer = styled(Container)`
  p {
    margin: 5px auto;
    color: ${({ theme }) => theme.colorBlue};
    text-align: center;
    font-family: ${({ theme }) => theme.fontSerif};
    font-style: italic;
    font-size: 0.8em;
    line-height: 1em;
  }
  @media only screen and (min-width: 960px) {
    p {
      padding: 4px 120px 0px 120px;
      font-size: 1em;
    }
  }
`

const Banner = ({ slice }) => (
  <Container maxWidth="lg">
    <BannerGrid container>
      <BannerTitle>
        <RichText render={slice.primary.title_of_banner.raw} />
      </BannerTitle>
      <Grid item xs={12}>
        <Image
          fluid={slice.primary.image_banner.fluid}
          alt={slice.primary.image_banner.alt}
        />
      </Grid>
    </BannerGrid>
    <CaptionContainer maxWidth="md">
      <RichText render={slice.primary.description.raw} />
    </CaptionContainer>
  </Container>
)

export default Banner
