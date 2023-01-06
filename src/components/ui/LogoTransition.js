import React from "react"
import Lottie from "react-lottie"
import animationData from "../../assets/lottie/gtp-logo-transition.json"

const LogoTransition = ({ playLogo }) => {
  const defaultOptions = {
    animationData: animationData,
    loop: false,
    autoplay: false,
  }
  return (
    <Lottie
      options={defaultOptions}
      width={"100%"}
      height={"100%"}
      play={playLogo}
    />
  )
}

export default LogoTransition
