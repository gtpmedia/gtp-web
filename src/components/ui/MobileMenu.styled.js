import styled from "styled-components"

export const StyledMobileMenu = styled.nav`
  position: fixed;
  z-index: 98;
  height: 100vh;
  width: 100%;
  top: 0px;
  left: 0px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    220deg,
    rgba(29, 72, 120, 0.9) 0%,
    rgba(131, 201, 244, 0.99) 100%
  );
  opacity: ${({ open }) => (open ? "1" : "0")};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    cursor: pointer;
    align-self: center;
    text-align: center;
    text-decoration: none;
    list-style: none;
    font-family: ${({ theme }) => theme.fontSerif};
    font-style: italic;
    font-size: 2em;
    font-weight: 800;
    line-height: 2em;
    color: #ffffff;
    transition: color 0.35s ease;
    &:hover {
      color: ${({ theme }) => theme.colorYellow};
    }
  }
`
