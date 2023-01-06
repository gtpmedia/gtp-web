import React from "react"
import { bool, func } from "prop-types"
import StyledBurger from "./Burger.styled"

const Burger = ({ open, setOpen, transitionNav }) => {
  return (
    <StyledBurger
      open={open}
      transitionNav={transitionNav}
      onClick={() => setOpen(!open)}
      onKeyDown={() => setOpen(!open)}
      role="button"
      aria-label="Main Menu"
      tabIndex={0}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Burger
