// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      text: string;
      link: string;
      background: string;
      boxShadow: string;
      date: string;
    };
  
    devices: {
      sm_mobile: string;
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}