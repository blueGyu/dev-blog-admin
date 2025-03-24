import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --header-height: 3.75rem;
  }

  body {
    font-family: 'Arial', sans-serif;
    height: 100vh;
    background-color: #f0f0f0;
    font-size: 1rem;
    color: #333;
  }

  main {
    height: 100%;
    padding: 1.25rem;
    padding-top: calc(var(--header-height) + 1.25rem);
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
`;

export default GlobalStyle;
