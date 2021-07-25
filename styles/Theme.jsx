import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: #f3f3f3;
  }

  a {
    color: #1155cc;
    text-decoration: none;
  }

  a:hover {
    border-bottom: 1.5px #1155cc dotted;
  }
`;

export const theme = {
  font: "Inter",
  primary: "#2079c7",
  secondary: "#666666",
  text: "#313131",
  hover: "#DBA11C"
}