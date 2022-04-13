import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved

// Fonts

const GlobalStyle = createGlobalStyle`
   * {
      font-family: Sofia Pro, serif;
    }
body {
      margin: 0;
      padding: 0;
      color: white;
      background-position: center bottom;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: contain;
      background-image: url('background.svg');
      background-color: #141518;
  img {
        height: auto;
        max-width: 100%;
      }
  a {
    text-decoration: none;
    color: #5D6588;
  }
      
    }
`

export default GlobalStyle
