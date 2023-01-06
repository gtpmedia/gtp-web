import styled from "styled-components"

const handleOpen = (open, transitionNav) => {
  if (open) {
    return "1"
  } else {
    if (transitionNav) {
      return "1"
    } else {
      return "0"
    }
  }
}

const handleTransform = (open, transitionNav, index, mobile) => {
  let trans = ""
  if (transitionNav) {
    trans += "translateX(0rem) "
  } else if (!transitionNav && !open && !mobile) {
    if (index === 1) {
      trans += "translateX(-5rem) "
    } else if (index === 2) {
      trans += "translateX(-10rem) "
    } else if (index === 3) {
      trans += "translateX(-20rem) "
    }
  }
  if (open) {
    if (index === 1) {
      trans += "translateY(0.15rem)"
    }
    if (index === 2) {
      trans += "rotate(-90deg)"
    }
    if (index === 3) {
      trans += "translateY(-0.15rem)"
    }
  } else if (!open) {
    trans += "rotate(0) translateY(0rem)"
  }
  return trans
}

const StyledBurger = styled.nav`
  position: fixed;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  top: 10px;
  right: 10px;
  height: 2rem;
  width: 2rem;
  padding: 0.5rem;
  margin: auto;
  background: rgba(131, 201, 244, 0.8);
  border-radius: 1.5rem;
  transition: all 0.3s ease;
  @media only screen and (min-width: 960px) {
    opacity: ${({ open, transitionNav }) => handleOpen(open, transitionNav)};
  }
  div {
    position: relative;
    margin: 0.15rem;
    width: 1.5rem;
    height: 0.25rem;
    background: #ffffff;
    border-radius: 10px;
    transition: all 0.3s ease-out;
    :first-child {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    :nth-child(3) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    @media only screen and (max-width: 959px) {
      :first-child {
        transform: ${({ open, transitionNav }) =>
          handleTransform(open, transitionNav, 1, true)};
      }
      :nth-child(2) {
        transform: ${({ open, transitionNav }) =>
          handleTransform(open, transitionNav, 2, true)};
      }
      :nth-child(3) {
        transform: ${({ open, transitionNav }) =>
          handleTransform(open, transitionNav, 3, true)};
      }
    }
    @media only screen and (min-width: 960px) {
      :first-child {
        transform: ${({ open, transitionNav }) =>
          handleTransform(open, transitionNav, 1, false)};
      }
      :nth-child(2) {
        transform: ${({ open, transitionNav }) =>
          handleTransform(open, transitionNav, 2, false)};
      }
      :nth-child(3) {
        transform: ${({ open, transitionNav }) =>
          handleTransform(open, transitionNav, 3, false)};
      }
    }
  }
`
export default StyledBurger
