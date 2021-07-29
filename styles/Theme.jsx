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
    colors: {
        primary: "#2079c7",
        secondary: "#666666",
        text: "#313131",
        hover: "#DBA11C",
        link: "#1155cc",
        background: "#f3f3f3",
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