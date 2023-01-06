import styled from "styled-components"

export const StyledContact = styled.div`
  position: relative;
  display: flex;
  flex: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  input,
  textarea {
    placeholderTextColor: "#83c9f4"
    display: inline-block;
    max-width: 100%;
    width: 100%;
    background-color: transparent;
    font-family: ${({ theme }) => theme.fontSans};
    font-size: 1em;
    font-weight: 400;
    color: #fff;
    outline: none;
    border: 0;
    border-bottom: 2px solid ${({ theme }) => theme.colorLightBlue};
    border-radius: 0;
    margin: 0px 0px 20px 0px;
    &:focus {
      background-color: ${({ theme }) => theme.colorBlue};
      border-bottom: 2px solid ${({ theme }) => theme.colorYellow};
    }
  }
  textarea {
    resize: vertical;
    background-color: none;
    height: 25px;
    transition: height 1s ease-out;
    &:focus {
      height: 240px;
    }
  }
  button {
    width: 50%;
    margin-top: 20px;
    padding: 10px;
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colorLightBlue};
    font-family: ${({ theme }) => theme.fontSerif};
    font-size: 1.5em;
    font-weight: 300;
    font-style: italic;
    color: ${({ theme }) => theme.colorLightBlue};
    &:hover {
      background-color: ${({ theme }) => theme.colorBlue};
      border-color: ${({ theme }) => theme.colorYellow};
    }
    @media only screen and (max-width: 599px) {
      width: 100%;
    }
  }
`

export const StyledResponse = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  font-family: ${({ theme }) => theme.fontSerif};
  font-size: 1.5em;
  font-weight: 300;
  font-style: italic;
  color: ${({ theme }) => theme.colorYellow};
`
