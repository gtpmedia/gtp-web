import React from "react"
import { bool, func } from "prop-types"
import { StyledMobileMenu } from "./MobileMenu.styled"
import Menu from "../menu"

const MobileMenu = ({ open, setOpen }) => {
  return (
    <StyledMobileMenu
      open={open}
      onClick={() => setOpen(false)}
      onKeyDown={() => setOpen(false)}
    >
      <Menu />
    </StyledMobileMenu>
  )
}

MobileMenu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default MobileMenu
