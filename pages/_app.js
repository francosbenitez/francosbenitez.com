import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout"
import { theme, GlobalStyle } from "../styles/Theme"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  )
}

export default MyApp
