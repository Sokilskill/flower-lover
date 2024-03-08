import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  breakpoints: {
    base: "0px",
    sm: "390px", //  mobile
    md: "768px", //  tablet
    lg: "1024px", //  laptop
    xl: "1440px", //  desktop
  },
  fonts: {
    body: `"Source Sans", sans-serif`,
    spline: `"Spline Sans", sans-serif`,
    playfair: `"Playfair Display", sans-serif`,
  },
  colors: {
    buttonAndTextColor: "#A93B59",
    mainText: "#F5EBEB",
    landingColor: "#B96A7F",
  },
  styles: {
    global: {
      body: {
        bg: "black",
        color: "mainText",
      },
    },
  },
});

export default theme;
