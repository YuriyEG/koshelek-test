import { createGlobalStyle } from "styled-components"
import regular from "../fonts/TTLakes-Regular.ttf"
import bold from "../fonts/TTLakes-Bold.ttf"

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'RegularTT';
  src: url(${regular}) format('TrueType'),
  url(${bold}) format('TrueType');

}
`

export default FontStyles
