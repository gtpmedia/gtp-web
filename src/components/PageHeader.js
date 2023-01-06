import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { RichText } from "prismic-reactjs"
import { Grid } from "@material-ui/core"

const WrapperHeader = styled.div`
  margin: 0;
`

const ImageGrid = styled(Grid)`
  margin: 0;
  padding: 0;
`

const TitleGrid = styled(Grid)`
  margin: 0;
  padding: 30px;
  h1 {
    margin: auto;
    font-family: ${({ theme }) => theme.fontSans};
    font-weight: 800;
    font-size: 3em;
    letter-spacing: 2px;
  }
  h4 {
    margin: auto;
    text-align: center;
    font-family: ${({ theme }) => theme.fontSerif};
    font-weight: 300;
    font-style: italic;
    font-size: 1.5em;
  }
`

function PageHeader({ headerContent }) {
  return (
    <WrapperHeader>
      <Grid container direction="row" alignItems="center">
        <ImageGrid item sm={6} xs={12}>
          <Image
            fluid={headerContent.bannerImage.fluid}
            alt={headerContent.bannerImage.alt}
          />
        </ImageGrid>
        <TitleGrid item sm={6} xs={12}>
          <RichText render={headerContent.title.raw} />
          <RichText render={headerContent.description.raw} />
        </TitleGrid>
      </Grid>
    </WrapperHeader>
  )
}

export default PageHeader
