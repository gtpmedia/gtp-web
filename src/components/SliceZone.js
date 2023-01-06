import React from "react"
import Featured from "./slices/Featured"
import Services from "./slices/Services"
import Portfolio from "./slices/Portfolio"
import TextContent from "./slices/TextContent"
import Quote from "./slices/Quote"
import Banner from "./slices/Banner"
import Vimeo from "./slices/Vimeo"

const SliceZone = ({ sliceZone }) => {
  const sliceComponents = {
    featured_content: Featured,
    services_list: Services,
    portfolio_gallery: Portfolio,
    text: TextContent,
    quote: Quote,
    banner_with_caption: Banner,
    vimeo: Vimeo,
  }

  const sliceZoneContent = sliceZone.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type]
    if (SliceComponent) {
      return <SliceComponent slice={slice} key={`slice-${index}`} />
    }
    return null
  })

  return <div className="container">{sliceZoneContent}</div>
}

export default SliceZone
