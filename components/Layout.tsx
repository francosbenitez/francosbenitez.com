import Footer from "./Footer";
import Head from "next/head";
import Navbar from "./Navbar";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "../styles/Theme";
import { useState, useEffect } from "react";
import Icon from "./Icon";

function useStickyState(defaultValue: any, key: any) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const stickyValue = window.localStorage.getItem(key);

    if (stickyValue !== null) {
      setValue(JSON.parse(stickyValue));
    }
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

const Layout = ({ children }: { children: any }) => {
  const [theme, setTheme] = useStickyState("light", "theme");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
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
        <Navbar>
          <button onClick={toggleTheme}>
            <Icon name={theme === "light" ? "night" : "day"} />
          </button>
        </Navbar>
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
