import React, { useState } from "react"
import {
  StyledPlayerContainer,
  StyledProgress,
  StyledReactPlayer,
} from "../styles/VideoPlayer.styled.js"

const VideoPlayer = props => {
  const [loading, setLoading] = useState(true)
  const videoLoaded = () => {
    setLoading(false)
  }

  return (
    <StyledPlayerContainer>
      <StyledProgress style={{ display: loading ? "block" : "none" }} />
      <StyledReactPlayer
        style={{ display: loading ? "none" : "block" }}
        className="react-player"
        width="100%"
        height="100%"
        controls={true}
        playing={props.playing}
        url={props.url}
        onReady={videoLoaded}
      />
    </StyledPlayerContainer>
  )
}

export default VideoPlayer
