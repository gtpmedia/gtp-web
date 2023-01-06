import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { RichText } from "prismic-reactjs"
import { Container, Grid } from "@material-ui/core"

const TextGrid = styled(Grid)`
  p {
    margin: auto;
    padding: 40px;
    color: ${({ theme }) => theme.colorBlue};
    text-align: center;
    font-family: ${({ theme }) => theme.fontSerif};
    font-style: italic;
    font-size: 2.5em;
    font-weight: 800;
  }
  @media only screen and (max-width: 959px) {
    p {
      padding: 15px 0px 0px 0px;
      font-size: 1.5em;
    }
  }
`

const PhotoGrid = styled(Grid)`
  margin: 0;
  padding: 0;
  p {
    margin: auto;
    padding: 10px;
    color: ${({ theme }) => theme.colorBlue};
    text-align: center;
    font-family: ${({ theme }) => theme.fontSerif};
    font-style: italic;
    font-size: 1em;
  }
  @media only screen and (max-width: 959px) {
    order: -1;
  }
`

const checkPhoto = photo => {
  if (photo !== null) {
    return 8
  } else {
    return 12
  }
}

const Quote = ({ slice }) => (
  <Container maxWidth="lg">
    <Grid container alignItems="center">
      <TextGrid item sm={checkPhoto(slice.primary.photo.fluid)} xs={12}>
        <RichText render={slice.primary.quote.raw} />
      </TextGrid>
      <PhotoGrid item sm={4} xs={12}>
        <Image
          fluid={slice.primary.photo.fluid}
          alt={slice.primary.photo.alt}
        />
        <RichText render={slice.primary.caption.raw} />
      </PhotoGrid>
    </Grid>
  </Container>
)

export default Quote
