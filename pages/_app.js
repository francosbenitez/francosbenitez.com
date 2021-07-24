import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../components/Layout"

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
    color: #1155cc;
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
    <Layout>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  </>
  )
}

export default MyApp
