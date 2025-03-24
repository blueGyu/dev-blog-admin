import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f0f0f0;
    font-family: 'Arial', sans-serif;
    font-size: 1rem;
    color: #333;
  }

  h1 {
    font-size: 2rem;  
  }

  h2 {
    font-size: 1.75rem;  
  }

  h3 {
    font-size: 1.5rem;  
  }

  h4 {
    font-size: 1.25rem;  
  }

  textarea, input {
    display: block;
    width: 100%;
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background: none;
    border: none;
    font-size: 1rem;
  }

  ul, ol {
    list-style: none;
  }

  img {
    display: block;
    width: auto;
    height: 100%;
  }
`;

export default GlobalStyle;
