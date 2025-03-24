import { createGlobalStyle } from "styled-components";

const ResetStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    line-height: 1.5;
    background: none;
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
    border: none;
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

export default ResetStyle;
