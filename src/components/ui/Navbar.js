import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StyledNavmenu, LogoContainer } from "./Navbar.styled"
import LogoTransition from "./LogoTransition.js"
import Burger from "./Burger.js"
import Menu from "../menu.js"
import MobileMenu from "./MobileMenu.js"

function Header({ siteTitle }) {
  const [open, setOpen] = useState(false)
  const [playLogo, setPlayLogo] = useState(false)
  const [minimizeLogo, setMinimizeLogo] = useState(false)
  const [transitionNav, setTransitionNav] = useState(false)

  useEffect(() => {
    document.addEventListener("scroll", e => {
      let scrolled = document.scrollingElement.scrollTop
      let bottom =
        document.scrollingElement.scrollTop - document.body.scrollHeight
      if (scrolled >= 5) {
        setPlayLogo(true)
      }
      if (scrolled >= 100) {
        setTransitionNav(true)
      } else {
        setTransitionNav(false)
      }
      if (bottom >= -window.innerHeight) {
        setMinimizeLogo(true)
      } else {
        setMinimizeLogo(false)
      }
    })
  }, [])

  return (
    <header>
      <LogoContainer minimizeLogo={minimizeLogo}>
        <Link to="/">
          <LogoTransition playLogo={playLogo} />
        </Link>
      </LogoContainer>
      <StyledNavmenu transitionNav={transitionNav} open={open}>
        <Menu />
      </StyledNavmenu>
      <Burger open={open} setOpen={setOpen} transitionNav={transitionNav} />
      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  )
}

export default Header
