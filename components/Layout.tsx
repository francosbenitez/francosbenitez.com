import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "../styles/Theme";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        Layout
        <Navbar />
        <div>{children}</div>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
