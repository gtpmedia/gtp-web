import styled from "styled-components"

export const LogoContainer = styled.div`
  position: fixed;
  z-index: 99;
  top: -50px;
  left: 10px;
  width: 240px;
  height: 240px;
  transition: all 0.3s ease-out;
  opacity: ${({ minimizeLogo }) => (minimizeLogo ? "0" : "1")};
  transform: scale(${({ minimizeLogo }) => (minimizeLogo ? "0.5" : "1")});
  a {
    display: inline-block;
    cursor: pointer;
  }
  @media only screen and (max-width: 959px) {
    top: -20px;
    left: 5px;
    width: 120px;
    height: 120px;
  }
`

export const StyledNavmenu = styled.div`
  display: ${({ open }) => (open ? "none" : "block")};
  position: fixed;
  z-index: 99;
  margin: 0px;
  justify-self: right;
  text-align: center;
  transition: all 0.3s ease;
  opacity: ${({ transitionNav }) => (transitionNav ? "0" : "1")};
  right: ${({ transitionNav }) => (transitionNav ? "-100px" : "10px")};
  ul {
    padding: 10px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    list-style: none;
    transition: background 0.3s ease;
    background: rgba(
      ${({ transitionNav }) =>
        transitionNav ? (131, 201, 244, 0.9) : (255, 255, 255, 0.9)};
    );
  }
  li {
    cursor: pointer;
    margin: 0px 10px;
    display: inline-block;
    list-style: none;
    font-family: ${({ theme }) => theme.fontSans};
    font-size: 1rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colorBlue};
    transition: color 0.5s ease;
    &:hover {
      color: ${({ theme }) => theme.colorLightBlue};
    }
  }
  @media only screen and (max-width: 959px) {
    display: none;
  }
`
