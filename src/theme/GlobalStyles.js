import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  };

  ${normalize}

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #000000;
  }

  h1, h2, h3, h4, p {
    line-height: 1.15;
    margin: 0;
  }
  
`;

export default GlobalStyle;
