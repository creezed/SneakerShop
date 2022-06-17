import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  
  * {
    font-family: ${({ theme }) => theme.font.notoSans};
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.accentColorLight};
  }
  
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    font-size: 100%;
    @media ${({ theme }) => theme.media.extraLarge} {
      font-size: 70%;
    }
    @media ${({ theme }) => theme.media.medium} {
      font-size: 60%;
    }
  }
  
  body {
    line-height: 1;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }

  html, body {
    background-color: ${({ theme }) => theme.colors.bg};
  }
  
  ::-webkit-scrollbar {
    width: 7px;
  }
  
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.gray800};
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