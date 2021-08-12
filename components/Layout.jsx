import Footer from "./Footer"
import Head from "next/head"
import Navbar from "./Navbar"
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "../styles/Theme"
import { React, useState } from 'react';
import { ThemeSwitcher } from "../styles/Buttons"
import Icon from "./Icon"

const Layout = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => { 
        theme === "light" ? setTheme("dark") : setTheme("light") }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyle />
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
                <link rel="manifest" href="/favicon_io/site.webmanifest" />
                <link rel="mask-icon" href="/favicon_io/safari-pinned-tab.svg" color="#919191" />
                <meta name="msapplication-TileColor" content={`${props => props.theme.colors.primary}`} />
                <meta name="theme-color" content={`${props => props.theme.colors.primary}`} />
            </Head>
            <Navbar>
                <ThemeSwitcher onClick={toggleTheme}>
                    <Icon name={theme === "light" ? "night" : "day"} />   
                </ThemeSwitcher>
            </Navbar>
            { children }
            <Footer />
        </ThemeProvider>
    );
};

export default Layout