import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "../styles/Theme";

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        Layout
        <div>{children}</div>
      </ThemeProvider>
    </>
  );
};

export default Layout;
