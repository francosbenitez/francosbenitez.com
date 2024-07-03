import Footer from "./Footer";
import Head from "next/head";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import Icon from "./Icon";
import LanguageSwitcher from "./LanguageSwitcher";
import FadeIn from "./FadeIn";

function useStickyState(defaultValue: string, key: string) {
  const [value, setValue] = useState<string>(defaultValue);

  useEffect(() => {
    const stickyValue = window.localStorage.getItem(key);

    if (stickyValue !== null) {
      setValue(JSON.parse(stickyValue));
    }
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useStickyState("light", "theme");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
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
        <meta name="msapplication-TileColor" content="#2079c7" />
        <meta name="theme-color" content="#2079c7" />
      </Head>
      <Navbar>
        <div className="flex items-center fill-primary gap-2">
          <button>
            <LanguageSwitcher />
          </button>
          <button onClick={toggleTheme}>
            <Icon name={theme === "light" ? "night" : "day"} />
          </button>
        </div>
      </Navbar>
      <FadeIn>{children}</FadeIn>
      <Footer />
    </>
  );
};

export default Layout;
