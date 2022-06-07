import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  
  * {
    font-family: ${({ theme }) => theme.font.notoSans};
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }

  html, body {
    background-color: ${({ theme }) => theme.colors.bg};
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`

export default GlobalStyle