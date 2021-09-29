import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-size: 16px;
  };

  ${normalize}

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  html {
    display: grid;
    place-items: center;
    scroll-behavior: smooth;
    height: 100vh;
    width: 100%;
    background-color: #F5F5F5;
  }

  body {
    width: 90%;
    height: 90%;
    position: relative;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background-color: #F2ECE7;
    border: 2px solid #000000;
    border-radius: 5px;
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
