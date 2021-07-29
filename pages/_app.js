import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout"
import { theme, GlobalStyle } from "../styles/Theme"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
