import styled from "styled-components"
import { Container, Grid } from "@material-ui/core"
import Image from "gatsby-image"

export const StyledContainer = styled(Container)`
  padding-top: 0px;
  p {
    align-self: start;
    font-family: ${({ theme }) => theme.fontSans};
    font-size: 1.5em;
    letter-spacing: 1px;
    line-height: 1.75em;
    &:nth-of-type(1) {
      margin: 0;
    }
    &:nth-of-type(2) {
      margin-bottom: 10px;
    }
  }
  & h3 {
    margin: auto;
    padding-bottom: 1em;
    text-align: left;
    color: #000000;
    font-family: ${({ theme }) => theme.fontSerif};
    font-style: italic;
    font-weight: 900;
    font-size: 2.7em;
    line-height: 1.25em;
  }
  @media only screen and (max-width: 959px) {
    margin-top: 20px;
    p {
      padding-bottom: 40px;
    }
  }
  @media only screen and (max-width: 599px) {
    margin-top: 20px;
    padding: 20px 0px 20px 0px;
    & h3 {
      font-size: 2.4em;
    }
  }
`

export const StyledImage = styled(Image)`
  object-fit: fill;
  height: 100%;
  width: 100%;
  transform: scale(1.1);
  transition: transform 1s ease-out;
`

export const StyledCaption = styled.div`
  position: absolute;
  z-index: 10;
  left: 0px;
  bottom: 0px;
  padding: 10px;
  margin: 20px;
  background-color: #ffffff;
  opacity: 0.8;
  & h2 {
    margin: 0 0;
    text-align: left;
    color: #000000;
    font-family: ${({ theme }) => theme.fontSans};
    font-weight: 800;
    font-style: italic;
    font-size: 1.75em;
  }
  & h3 {
    margin: 0 0;
    padding: 0;
    text-align: left;
    font-family: ${({ theme }) => theme.fontSerif};
    font-style: none;
    font-weight: 300;
    font-size: 1.5em;
  }
  transition: all ease 1s;
  @media only screen and (max-width: 599px) {
    margin: 10px;
    & h2 {
      font-size: 1.25em;
    }
    & h3 {
      font-size: 1em;
    }
  }
  @media only screen and (max-width: 959px) {
    & h2 {
      font-size: 1.25em;
    }
  }
`

export const StyledPoster = styled.div`
  position: relative;
  cursor: pointer;
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
    }
  }
`

export const StyledGrid = styled(Grid)`
  position: relative;
  padding: 50px 50px 50px 50px;
  &:nth-of-type(1) ${StyledPoster}:after {
    background: rgb(145, 196, 153);
    background: linear-gradient(
      45deg,
      rgba(29, 72, 120, 0.5) 0%,
      rgba(255, 107, 108, 0.9) 100%
    );
  }
  &:nth-of-type(2) ${StyledPoster}:after {
    background: rgb(145, 196, 153);
    background: linear-gradient(
      45deg,
      rgba(29, 72, 120, 0.5) 0%,
      rgba(145, 196, 153, 0.9) 100%
    );
  }
  &:nth-of-type(3) ${StyledPoster}:after {
    background: rgb(145, 196, 153);
    background: linear-gradient(
      45deg,
      rgba(29, 72, 120, 0.5) 0%,
      rgba(255, 193, 69, 0.9) 100%
    );
  }
  @media only screen and (min-width: 960px) {
    &:nth-of-type(even) {
      top: 100px;
    }
  }
  @media only screen and (max-width: 599px) {
    padding: 20px 0px 0px 0px;
    &:nth-of-type(4) {
      padding: 0;
    }
  }
  @media only screen and (max-width: 959px) {
    margin: 0;
    padding: 10px 0px 10px 0px;
    p {
      font-size: 1.5em;
    }
    &:nth-of-type(4) {
      align-self: center;
      order: -1;
    }
  }
`
