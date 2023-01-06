import React from "react"
import { Grid } from "@material-ui/core"
import {
  SliceFooter,
  StyledContainer,
  StyledGrid,
  StyledContact,
  StyledCopyright,
} from "./styles/Footer.styled"
import LogoColor from "../assets/svg/gtp-logo-color.svg"
import Contact from "./contact"

function Footer(props) {
  return (
    <>
      <SliceFooter>
        <StyledContainer maxWidth="lg">
          <Grid container spacing={0} alignItems="center" justify="center">
            <StyledGrid item md={6} sm={12}>
              <LogoColor />
            </StyledGrid>
            <StyledGrid item md={6} sm={12}>
              <StyledContact>202-337-7678</StyledContact>
              <StyledContact>
                3299 K St. NW, Suite 101
                <br />
                Washington, DC 20007
              </StyledContact>
              <Contact />
            </StyledGrid>
            <Grid item sm={12}>
              <StyledCopyright>
                ©{new Date().getFullYear()} GtP Media
              </StyledCopyright>
            </Grid>
          </Grid>
        </StyledContainer>
      </SliceFooter>
      <div id="contact"></div>
    </>
  )
}

export default Footer
