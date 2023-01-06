import React from "react"
import { Link } from "gatsby"
import { Grid } from "@material-ui/core"
import VideoThumbnail from "../ui/VideoThumbnail"

function Portfolio({ slice }) {
  const makeURL = str => {
    return "/projects/" + str.replace(/\s+/g, "-").toLowerCase()
  }

  return (
    <Grid container id="portfolio">
      {slice.items.map((galleryItem, index) => (
        <Grid item md={4} sm={6} xs={12} key={index}>
          <Link
            to={makeURL(galleryItem.video_title.text)}
            state={{
              modal: true,
            }}
          >
            <VideoThumbnail index={index} galleryItem={galleryItem} />
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}

export default Portfolio
