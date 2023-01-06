import { createGlobalStyle, css } from "styled-components"
import OggTextBook from "../../assets/fonts/OggText-Book.woff"
import OggTextBookItalic from "../../assets/fonts/OggText-BookItalic.woff"
import OggTextExtrabold from "../../assets/fonts/OggText-Extrabold.woff"
import OggTextExtraboldItalic from "../../assets/fonts/OggText-ExtraboldItalic.woff"
import CentraBook from "../../assets/fonts/CentraNo2-Book.woff"
import CentraBookItalic from "../../assets/fonts/CentraNo2-BookItalic.woff"
import CentraExtrabold from "../../assets/fonts/CentraNo2-Extrabold.woff"
import CentraExtraboldItalic from "../../assets/fonts/CentraNo2-ExtraboldItalic.woff"
import OggTextBook2 from "../../assets/fonts/OggText-Book.woff2"
import OggTextBookItalic2 from "../../assets/fonts/OggText-BookItalic.woff2"
import OggTextExtrabold2 from "../../assets/fonts/OggText-Extrabold.woff2"
import OggTextExtraboldItalic2 from "../../assets/fonts/OggText-ExtraboldItalic.woff2"
import CentraBook2 from "../../assets/fonts/CentraNo2-Book.woff2"
import CentraBookItalic2 from "../../assets/fonts/CentraNo2-BookItalic.woff2"
import CentraExtrabold2 from "../../assets/fonts/CentraNo2-Extrabold.woff2"
import CentraExtraboldItalic2 from "../../assets/fonts/CentraNo2-ExtraboldItalic.woff2"

const fontFaces = css`
  @font-face {
    font-family: "Ogg Text";
    src: local("Ogg Text Extrabold"), local("OggText-Extrabold"),
      url(${OggTextExtrabold}) format("woff"),
      url(${OggTextExtrabold2}) format("woff2");
    font-weight: 800;
    font-display: auto;
  }
  @font-face {
    font-family: "Ogg Text";
    src: local("Ogg Text Extrabold Italic"), local("OggText-ExtraboldItalic"),
      url(${OggTextExtraboldItalic}) format("woff"),
      url(${OggTextExtraboldItalic2}) format("woff2");
    font-weight: 800;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: "Ogg Text";
    src: local("Ogg Text Book"), local("OggText-Book"),
      url(${OggTextBook}) format("woff"), url(${OggTextBook2}) format("woff2");
    font-weight: 300;
    font-display: auto;
  }
  @font-face {
    font-family: "Ogg Text";
    src: local("Ogg Text Book Italic"), local("OggText-BookItalic"),
      url(${OggTextBookItalic}) format("woff"),
      url(${OggTextBookItalic2}) format("woff2");
    font-weight: 300;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: "Centra No 2";
    src: local("Centra No 2 Book"), local("CentraNo2-Book"),
      url(${CentraBook}) format("woff"), url(${CentraBook2}) format("woff2");
    font-weight: 400;
    font-display: auto;
  }
  @font-face {
    font-family: "Centra No 2";
    src: local("Centra No 2 Book Italic"), local("CentraNo2-BookItalic"),
      url(${CentraBookItalic}) format("woff"),
      url(${CentraBookItalic2}) format("woff2");
    font-weight: 400;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: "Centra No 2";
    src: local("Centra No 2 Extrabold"), local("CentraNo2-Extrabold"),
      url(${CentraExtrabold}) format("woff"),
      url(${CentraExtrabold2}) format("woff2");
    font-weight: 800;
    font-display: auto;
  }
  @font-face {
    font-family: "Centra No 2";
    src: local("Centra No 2 Extrabold Italic"),
      local("CentraNo2-ExtraboldItalic"),
      url(${CentraExtraboldItalic}) format("woff"),
      url(${CentraExtraboldItalic2}) format("woff2");
    font-weight: 800;
    font-style: italic;
    font-display: auto;
  }
`

const GlobalStyle = createGlobalStyle`
${fontFaces}
body,
html,
main {
  margin: 0;
  padding: 0;
}
main {
  min-height: 100vh;
  background: rgb(235, 246, 252);
  background: linear-gradient(
    90deg,
    rgba(235, 246, 252, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(235, 246, 252, 1) 100%
  );
  position: relative;
  z-index: 1;
}
h1 {
  font-family: ;
  color: #000000;
  font-size: 3em;
  font-weight: 600;
  font-style: italic;
  text-align: center;
}
h2 {
  font-family: ${({ theme }) => theme.fontSerif};
  color: #000000;
  font-size: 2.5em;
  text-align: center;
}
h3 {
  font-family: ${({ theme }) => theme.fontSerif};
  color: #000000;
  font-size: 2.5em;
  text-align: center;
}
h4 {
  font-family: ${({ theme }) => theme.fontSans};
  color: #000000;
  font-size: 1em;
}
p {
  font-family: ${({ theme }) => theme.fontSans};
  color: #000000;
  font-weight: 300;
}
@media only screen and (max-width: 599px) {
  p {
    font-size: 1.5em;
    line-height: 1.5em;
  }
}
`
export default GlobalStyle
