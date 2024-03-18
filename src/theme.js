import { extendTheme } from "@chakra-ui/react";

export const mytheme = extendTheme({
  breakpoints: {
    base: "0em",
    sm: "24em", // 390px / 16px = 24.375em
    md: "48em", // 768px / 16px = 48em
    lg: "64em", // 1024px / 16px = 64em
    xl: "90em", // 1440px / 16px = 90em
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
  components: {
    Container: {
      baseStyle: {
        maxW: "100%",
        px: { base: "33px", lg: "72px" },
      },
    },
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
