import styled from "styled-components"

export const StyledContainer = styled.div`
  position: relative;
  display: block;
  height: 110vh;
  min-width: 100%;
  overflow: hidden;
  z-index: -8;
  background-color: #ffffff;
  video {
    position: relative;
    object-fit: cover;
    height: 100%;
    width: 100%;
    overflow: hidden;
    z-index: 0;
  }
  @media only screen and (max-width: 959px) {
    height: 50vh;
  }
`
