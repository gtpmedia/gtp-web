import styled from "styled-components"
import Image from "gatsby-image"

export const StyledImage = styled(Image)`
  object-fit: fill;
  height: 100%;
  width: 100%;
  transform: scale(1.1);
  transition: transform 1s ease-out;
`

export const StyledCaption = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translateX(-50%, -50%);
  z-index: 10;
  color: #ffffff;
  text-align: center;
  font-family: ${({ theme }) => theme.fontSans};
  font-weight: 800;
  font-size: 2em;
  font-style: italic;
  opacity: 0;
  transition: all 1s ease-out;
`

export const StyledItem = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: opacity 0.5s ease;
    background: rgb(255, 193, 69);
    background: linear-gradient(
      220deg,
      rgba(29, 72, 120, 0.99) 0%,
      rgba(255, 193, 69, 0.75) 100%
    );
  }
  &:hover,
  &:active {
    ${StyledImage} {
      transform: scale(1.025);
    }
    &:after {
      opacity: 1;
    }
    ${StyledCaption} {
      opacity: 1;
      letter-spacing: 1px;
    }
  }
`
