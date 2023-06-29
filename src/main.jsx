import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/dm-serif-display";
import "@fontsource/karla/400.css";
import "@fontsource/karla/700.css";

const theme = extendTheme({
  colors: {
    DarkViolet: "hsl(256, 26%, 20%)",
    GrayishBlue: "hsl(216, 30%, 68%)",
    VeryDarkViolet: "hsl(270, 9%, 17%)",
    DarkGrayishViolet: "hsl(273, 4%, 51%)",
    VeryLightGray: "hsl(0, 0%, 98%)",
  },
  fonts: {
    DmSerif: `'DM Serif Display', sans-serif`,
    Karla: `'Karla Variable', sans-serif`,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
