import styled from "styled-components"
import { CircularProgress } from "@material-ui/core"
import ReactPlayer from "react-player/vimeo"

export const StyledPlayerContainer = styled.div`
  min-width: 50%;
  position: relative;
  padding-top: 56.25%;
`
export const StyledProgress = styled(CircularProgress)`
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
`

export const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`
