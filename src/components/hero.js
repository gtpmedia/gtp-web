import React from "react"
import { StyledContainer } from "./styles/Hero.styled"
import DownButton from "../components/ui/DownButton"

function Hero({ heroContent }) {
  return (
    <StyledContainer>
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={heroContent.background_video.url} type="video/mp4" />
        <img src={heroContent.background_image.url} alt="Video Background" />
      </video>
      <DownButton url="/#featured" />
    </StyledContainer>
  )
}

export default Hero
