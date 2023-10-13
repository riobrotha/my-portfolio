import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
  disableTransitionOnChange: false,
};

const styles = {
  global: (props) => ({
    body: {
      bg: props.colorMode === "light" ? "gray.100" : "gray.900",
      transitionProperty: "background",
      transitionDuration: "normal",
    },
  }),
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
  body: "'M PLUS Rounded 1c'",
};

const theme = extendTheme({
  config,
  styles,
  fonts,
});

export default theme;
