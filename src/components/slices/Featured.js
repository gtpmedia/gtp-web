import React from "react"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import {
  StyledContainer,
  StyledGrid,
  StyledPoster,
  StyledImage,
  StyledCaption,
} from "../styles/Featured.styled.js"
import { Grid } from "@material-ui/core"

const Featured = ({ slice }) => (
  <StyledContainer maxWidth="lg" id="featured">
    <Grid container direction="row" align-items="start">
      {slice.items.map((galleryItem, index) => (
        <StyledGrid
          item
          key={index}
          xs={12}
          sm={6}
          data-sal="slide-up"
          data-sal-delay={`${index * 300}`}
          data-sal-duration="1000"
          data-sal-easing="in"
        >
          <Link to={galleryItem.featured_link.url}>
            <StyledPoster>
              <StyledImage
                fluid={galleryItem.featured_poster.fluid}
                alt={galleryItem.featured_poster.alt}
              />
              <StyledCaption>
                <RichText render={galleryItem.featured_title.raw} />
                <RichText render={galleryItem.featured_subtitle.raw} />
              </StyledCaption>
            </StyledPoster>
          </Link>
        </StyledGrid>
      ))}
      <StyledGrid
        item
        xs={12}
        sm={6}
        data-sal="slide-up"
        data-sal-duration="1200"
        data-sal-easing="in"
      >
        <RichText render={slice.primary.text_box.raw} />
      </StyledGrid>
    </Grid>
  </StyledContainer>
)

export default Featured
