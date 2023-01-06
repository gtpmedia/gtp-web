import React from "react"
import { RichText } from "prismic-reactjs"
import { Container, Grid } from "@material-ui/core"
import { SliceWrapper, StyledGrid, StyledItem } from "../styles/Services.styled"

const Services = ({ slice }) => (
  <SliceWrapper id="services">
    <Container maxWidth="lg">
      <Grid container direction="row" alignItems="center">
        <StyledGrid item sm={12}>
          <RichText render={slice.primary.services_title.raw} />
        </StyledGrid>
        <StyledGrid item sm={12} md={6}>
          <RichText render={slice.primary.services_description.raw} />
        </StyledGrid>
        <StyledGrid item sm={12} md={6}>
          {slice.items.map((galleryItem, index) => (
            <StyledItem key={index}>
              <RichText render={galleryItem.service.raw} />
            </StyledItem>
          ))}
        </StyledGrid>
      </Grid>
    </Container>
  </SliceWrapper>
)

export default Services
