import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Menu = () => {
  return (
    <ul>
      <AnchorLink to="/#featured" title="Featured Projects">
        <li>Featured Projects</li>
      </AnchorLink>
      <AnchorLink to="/#services" title="Our Services">
        <li>Our Services</li>
      </AnchorLink>
      <AnchorLink to="/#portfolio" title="Portfolio">
        <li>Portfolio</li>
      </AnchorLink>
      <AnchorLink to="/#contact" title="Contact">
        <li>Contact Us</li>
      </AnchorLink>
    </ul>
  )
}

export default Menu
