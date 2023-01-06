import styled from "styled-components"
import { Grid, Container } from "@material-ui/core"

export const SliceFooter = styled.div`
  position: sticky;
  scroll-margin-top: 1em;
  bottom: 0;
  width: 100%;
  min-height: 100vh;
  background: rgb(29, 72, 120);
  background: linear-gradient(
    220deg,
    rgba(29, 72, 120, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  overflow: hidden;
`

export const StyledContainer = styled(Container)`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  padding-top: 80px;
`

export const StyledGrid = styled(Grid)`
  padding: 40px;
  svg {
    width: 100%;
  }
  @media only screen and (min-width: 960px) {
    padding: 80px;
    &:nth-of-type(2) {
      border-left: solid 2px ${({ theme }) => theme.colorLightBlue};
    }
  }
`

export const StyledContact = styled.p`
  display: block;
  margin: auto;
  margin-bottom: 40px;
  text-align: left;
  font-family: ${({ theme }) => theme.fontSans};
  font-weight: 400;
  font-size: 1.5em;
  line-height: 1.25em;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colorLightBlue};
  @media only screen and (max-width: 959px) {
    text-align: center;
    font-size: 1.15em;
  }
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    font-family: ${({ theme }) => theme.fontSans};
    font-size: 1em;
    font-weight: 300;
    font-style: italic;
    color: ${({ theme }) => theme.colorLightBlue};
    opacity: 0.5; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    font-family: ${({ theme }) => theme.fontSans};
    font-size: 1em;
    font-weight: 300;
    font-style: italic;
    color: ${({ theme }) => theme.colorLightBlue};
    opacity: 0.5;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    font-family: ${({ theme }) => theme.fontSans};
    font-size: 1em;
    font-weight: 300;
    font-style: italic;
    color: ${({ theme }) => theme.colorLightBlue};
    opacity: 0.5;
  }
`

export const StyledCopyright = styled.p`
  padding: 40px;
  text-align: center;
  position: relative;
  bottom: 0px;
  color: ${({ theme }) => theme.colorBlue};
  font-family: ${({ theme }) => theme.fontSans};
  font-weight: 800;
  font-size: 0.75em;
`
