/*import '../styles/globals.css'*/
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #f3f3f3;
  }

  * {
    font-family: 'Inter', sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

const theme = {
  font: "Inter",
  primary: "#2079c7",
  secondary: "#666666",
}


function MyApp({ Component, pageProps }) {
  return (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
  )
}

export default MyApp
