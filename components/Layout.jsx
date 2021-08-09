import Footer from "./Footer"
import Head from "next/head"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
                <link rel="manifest" href="/favicon_io/site.webmanifest" />
                <link rel="mask-icon" href="/favicon_io/safari-pinned-tab.svg" color="#919191" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#2079c7" />
            </Head>
            <Navbar />
            { children }
            <Footer />
        </>
    );
};

export default Layout