import React from "react"
import {
  StyledItem,
  StyledImage,
  StyledCaption,
} from "../styles/VideoThumbnail.styled"

function VideoThumbnail({ index, galleryItem }) {
  return (
    <StyledItem key={`${index}`} role="button" tabIndex="0">
      <StyledImage
        fluid={galleryItem.video_thumbnail.fluid}
        alt={galleryItem.video_title.text}
      />
      <StyledCaption>{galleryItem.video_title.text}</StyledCaption>
    </StyledItem>
  )
}

export default VideoThumbnail
