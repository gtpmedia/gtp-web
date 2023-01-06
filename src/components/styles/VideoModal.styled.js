import styled from "styled-components"

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledContainer = styled.div`
  position: relative;
`

export const StyledContents = styled.div`
  background-color: rgb(0, 0, 0, 0.9);
  max-width: 720px;
  max-height: 90vh;
  overflow-y: auto;
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colorBlue};
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #000000;
  }
  &::-webkit-scrollbar {
    width: 8px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: $color-blue;
    border: 0px;
  }
  @media only screen and (min-width: 960px) {
    min-width: 640px;
  }
`

export const StyledModalInfo = styled.div`
  padding: 20px;
  h2 {
    margin: 10px 0px 0px 0px;
    color: ${({ theme }) => theme.colorYellow};
    font-family: ${({ theme }) => theme.fontSerif};
    font-weight: 800;
    font-style: italic;
    font-size: 1.5em;
  }
  p {
    padding: 0px 20px 0px 20px;
    color: #ffffff;
    font-family: $font-sans;
    font-size: 1em;
  }
  @media only screen and (max-width: 959px) {
    padding: 0;
    margin: 0;
  }
`

export const StyledCredits = styled.p`
  padding: 0px 20px 0px 20px;
  color: #ffffff;
  font-family: ${({ theme }) => theme.fontSans};
  font-weight: 300;
  font-size: 1em;
`

export const StyledCreditsLabel = styled.span`
  color: ${({ theme }) => theme.colorLightBlue};
  font-weight: 800;
`

export const StyledCloseButton = styled.div`
  margin: auto;
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translate(-50%);
svg {
  margin: auto;
  cursor: pointer;
  height: 40px;
  width: auto;
  transform: scale(1);
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`
