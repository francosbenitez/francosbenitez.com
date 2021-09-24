import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: 1.5;
        font-family: "IBM Plex Sans";
        /* Firefox */
        scrollbar-width: thin;
        scrollbar-color: ${props => props.theme.colors.secondary} ${props => props.theme.colors.primary};
        scroll-behavior: smooth;
    }
    
    body {
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
    }

    a {
        color: ${props => props.theme.colors.link};
        text-decoration: none;
        cursor: pointer;
    }

    a:hover {
        border-bottom: 1.5px ${props => props.theme.colors.primary} dotted;
    }

    p {
        color: ${props => props.theme.colors.text};
        font-size: 1.1em;
    }

    /* Chrome, Edge, and Safari */
    body::-webkit-scrollbar {
        width: 12px;
    }

    body::-webkit-scrollbar-track {
        background: ${props => props.theme.colors.primary};
    }

    body::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary}; 
        border-radius: 20px;       
        border: 3px solid ${props => props.theme.colors.primary};  
    }
`;

export const lightTheme = {
    colors: {
        primary: "#2079c7",
        secondary: "#6AADFF",
        tertiary: "#DEF2FF",
        text: "#222823",
        link: "#1155cc",
        // grey: "#222823",
        background: "#F4F7F5",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
    },

    devices: {
        sm_mobile: "(min-width: 350px)",
        mobile: "(min-width: 500px)",
        tablet: "(min-width: 800px)",
        desktop: "(min-width: 1160px)",
    },
}
export const darkTheme = {
    colors: {
        primary: "#A7A2A9",
        secondary: "#575A5E",
        tertiary: "#575a5eae",
        text: "#F4F7F5",
        link: "#E7CFBC",
        // grey: "#F4F7F5",
        background: "#222823",
        boxShadow: "0 0 5px rgba(0, 0, 0, 1)",
    },

    devices: {
        sm_mobile: "(min-width: 350px)",
        mobile: "(min-width: 500px)",
        tablet: "(min-width: 800px)",
        desktop: "(min-width: 1160px)",
    },
}
