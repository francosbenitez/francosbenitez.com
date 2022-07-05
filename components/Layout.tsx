import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "../styles/Theme";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        Layout
        <Navbar />
        <div>{children}</div>
      </ThemeProvider>
    </>
  );
};

export default Layout;
