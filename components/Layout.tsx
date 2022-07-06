import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "../styles/Theme";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon_io/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon_io/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon_io/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon_io/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicon_io/safari-pinned-tab.svg"
            color="#919191"
          />
          <meta
            name="msapplication-TileColor"
            content={`${(props: any) => props.theme.colors.primary}`}
          />
          <meta
            name="theme-color"
            content={`${(props: any) => props.theme.colors.primary}`}
          />
        </Head>
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
