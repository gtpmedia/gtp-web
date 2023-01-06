import React, { useState } from "react"
import styled from "styled-components"
import { RichText } from "prismic-reactjs"
import { Container, CircularProgress } from "@material-ui/core"
import ReactPlayer from "react-player/vimeo"

const WrapperVimeo = styled.div`
  background: red;
  position: relative;
  padding-top: 56.25%;
  left: 50%;
  transform: translateX(-50%);
`

const StyledPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`

const CaptionContainer = styled(Container)`
  p {
    margin: 5px auto;
    color: ${({ theme }) => theme.colorBlue};
    text-align: center;
    font-family: ${({ theme }) => theme.fontSerif};
    font-style: italic;
    font-size: 0.8em;
    line-height: 1em;
  }
  @media only screen and (min-width: 960px) {
    p {
      padding: 4px 120px 0px 120px;
      font-size: 1em;
    }
  }
`

function Vimeo({ slice }) {
  const [loading, setLoading] = useState(true)
  const videoLoaded = () => {
    setLoading(false)
  }

  return (
    <Container maxWidth="md" alignItems="center" justify-content="center">
      <WrapperVimeo>
        <CircularProgress
          className="loader-video"
          style={{ display: loading ? "block" : "none" }}
        />
        <StyledPlayer
          style={{ display: loading ? "none" : "block" }}
          width="100%"
          height="100%"
          controls="true"
          url={slice.primary.vimeo.embed_url}
          onReady={videoLoaded}
        />
      </WrapperVimeo>
      <CaptionContainer maxWidth="md">
        <RichText render={slice.primary.caption.raw} />
      </CaptionContainer>
    </Container>
  )
}

export default Vimeo
