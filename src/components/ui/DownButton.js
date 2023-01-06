import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styled from "styled-components"
import BackArrow from "../../assets/svg/down-arrow.svg"

const StyledWrapper = styled.div`
  position: absolute;
  bottom: 15vh;
  right: 5vw;
  text-align: center;
  width: 60px;
  svg {
    margin: auto;
    cursor: pointer;
    transform: scale(1);
    opacity: 0.75;
    transition: all 0.5s ease;
    &:hover {
      opacity: 1;
      transform: scale(1.1) translateY(20px);
    }
  }
  @media only screen and (max-width: 959px) {
    display: none;
  }
`

const DownButton = props => {
  return (
    <StyledWrapper>
      <AnchorLink to={props.url}>
        <BackArrow />
      </AnchorLink>
    </StyledWrapper>
  )
}

export default DownButton
