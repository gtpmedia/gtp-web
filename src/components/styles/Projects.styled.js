import styled from "styled-components"
import { Container } from "@material-ui/core"

export const StyledContainer = styled(Container)`
  padding-top: 80px;
  padding-bottom: 40px;
  h1 {
    padding-top: 30px;
    padding-bottom: 20px;
    margin: 0;
    font-family: ${({ theme }) => theme.fontSans};
    font-weight: 800;
    font-size: 3.25em;
    letter-spacing: 2px;
    line-height: 1em;
  }
  p {
    color: #000000;
    font-family: ${({ theme }) => theme.fontSans};
    font-size: 1.25em;
    font-weight: 300;
    line-height: 2em;
  }
`
export const StyledCredits = styled.span`
  color: #000000;
  font-family: ${({ theme }) => theme.fontSans};
  font-size: 1em;
  font-weight: 300;
`
export const StyledCreditsLabel = styled.span`
  color: ${({ theme }) => theme.colorBlue};
  font-weight: 800;
`
