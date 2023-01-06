import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../styles/theme"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import VideoPlayer from "./VideoPlayer"
import {
  StyledModal,
  StyledContainer,
  StyledContents,
  StyledModalInfo,
  StyledCredits,
  StyledCreditsLabel,
  StyledCloseButton,
} from "../styles/VideoModal.styled.js"
import CloseIcon from "../../assets/svg/close-icon.svg"

function VideoModal(props) {
  return (
    <ThemeProvider theme={theme}>
      <Link to={props.closeTo}>
        <StyledModal>
          <StyledContainer>
            <StyledContents>
              <VideoPlayer url={props.url} playing={props.playing} />
              <StyledModalInfo>
                <h2>{props.title}</h2>
                <div className="modal-video-description">
                  <RichText render={props.description} />
                </div>
                <StyledCredits>
                  <StyledCreditsLabel>Artist:</StyledCreditsLabel>{" "}
                  {props.artist}
                  <br />
                  <StyledCreditsLabel className="modal-video-credits-label">
                    Client:
                  </StyledCreditsLabel>{" "}
                  {props.client}
                </StyledCredits>
              </StyledModalInfo>
            </StyledContents>
            <StyledCloseButton role="button" tabindex="0">
              <Link to={props.closeTo}>
                <CloseIcon />
              </Link>
            </StyledCloseButton>
          </StyledContainer>
        </StyledModal>
      </Link>
    </ThemeProvider>
  )
}

export default VideoModal
