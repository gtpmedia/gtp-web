import styled from "styled-components"
import { Grid } from "@material-ui/core"

export const SliceWrapper = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  width: 100%;
  background: rgb(131, 201, 244);
  background: linear-gradient(
    220deg,
    rgba(29, 72, 120, 1) 0%,
    rgba(131, 201, 244, 1) 100%
  );
  clip-path: polygon(0 0, 100% 50px, 100% 100%, 0 100%);
  h1 {
    font-family: ${({ theme }) => theme.fontSans};
    font-style: none;
    font-weight: 800;
    color: #ffffff;
    font-size: 3.5em;
    text-align: center;
    margin: auto;
  }
  h2 {
    text-align: left;
    margin: auto;
    padding: 0.5em 0em 0.5em 2em;
    font-family: ${({ theme }) => theme.fontSerif};
    font-weight: 800;
    font-size: 1.75em;
    font-style: italic;
    color: #ffffff;
  }
  p {
    color: #ffffff;
    font-family: ${({ theme }) => theme.fontSans};
    font-size: 1.5em;
    line-height: 2em;
    font-weight: 300;
    margin: auto;
  }
  @media only screen and (max-width: 599px) {
    h1 {
      font-size: 2.75em;
      line-height: 1.25em;
    }
    h2 {
      font-size: 1.5em;
    }
    p {
      font-size: 1.25em;
    }
  }
`

export const StyledGrid = styled(Grid)`
  padding: 30px;
  @media only screen and (max-width: 599px) {
    padding: 10px;
  }
`

export const StyledItem = styled.div`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    height: 2px;
    width: 2em;
    background: ${({ theme }) => theme.colorYellow};
  }
`
