import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
      line-height: 1.5;
      color: #313131;
      /* Firefox */
      scrollbar-width: thin;
      scrollbar-color: #6AADFF #2079c7;
      scroll-behavior: smooth;
    }

    body {
      background-color: #f9fafb;
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

    /* Chrome, Edge, and Safari */
    body::-webkit-scrollbar {
      width: 12px;
    }

    body::-webkit-scrollbar-track {
      background: #2079c7;
    }

    body::-webkit-scrollbar-thumb {
      background-color: #6AADFF; 
      border-radius: 20px;       
      border: 3px solid #2079c7;  
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
        background: "#f9fafb",
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