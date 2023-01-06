import React from "react"
import styled from "styled-components"
import { RichText } from "prismic-reactjs"
import { Container } from "@material-ui/core"

const StyledContainer = styled(Container)`
  padding: 30px 0px 30px 0px;
  p {
    margin: auto;
    padding: 15px;
    font-family: $font-sans;
    font-size: 1.25em;
    line-height: 1.5em;
    letter-spacing: 0px;
  }
  @media only screen and (max-width: 959px) {
    padding: 10px;
    p {
      font-size: 1em;
    }
  }
`

const TextContent = ({ slice }) => (
  <StyledContainer maxWidth="md">
    <RichText render={slice.primary.text.raw} />
  </StyledContainer>
)

export default TextContent
