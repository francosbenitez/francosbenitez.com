import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
      line-height: 1.5;
    }

    body {
      background-color: white;
    }

    a {
      color: #1155cc;
      text-decoration: none;
      cursor: pointer;
    }

    a:hover {
      border-bottom: 1.5px #1155cc dotted;
    }

    p {
      font-size: 1em;
    }
`;

export const theme = {
    colors: {
        primary: "#2079c7",
        secondary: "#6AADFF",
        tertiary: "#DEF2FF",
        fourth: "#DBA11C",
        text: "#313131",
        link: "#1155cc",
        background: "white",
    },

    font: {
        text: "Inter",
    },

    devices: {
        sm_mobile: "(min-width: 350px)",
        mobile: "(min-width: 500px)",
        tablet: "(min-width: 800px)",
        desktop: "(min-width: 1160px)",
    },
};