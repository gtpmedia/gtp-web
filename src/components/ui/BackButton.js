import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import BackArrow from "../../assets/svg/back-arrow.svg"

const StyledWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 120px;
  svg {
    margin: auto;
    cursor: pointer;
    transform: scale(1);
    opacity: 0.5;
    transition: all 0.5s ease;
    &:hover {
      opacity: 1;
      transform: scale(1.1) translateX(-40px);
    }
  }
`

const BackButton = props => {
  return (
    <StyledWrapper>
      <Link to={props.url}>
        <BackArrow />
      </Link>
    </StyledWrapper>
  )
}

export default BackButton
