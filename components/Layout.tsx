import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "../styles/Theme";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        Layout
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
