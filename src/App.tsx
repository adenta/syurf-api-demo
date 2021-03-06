import { useEffect, useState } from "react";
import { theme } from "@chakra-ui/pro-theme";
import {
  Box,
  Button,
  ChakraProvider,
  extendTheme,
  Heading,
  Input,
} from "@chakra-ui/react";
import Hero from "./hero";
import Waitlist from "./waitlist";
const myTheme = extendTheme(
  {
    colors: { ...theme.colors, brand: theme.colors.blue },
  },
  theme
);
function App() {
  return (
    <ChakraProvider theme={myTheme}>
      <Hero />
      <Waitlist />
    </ChakraProvider>
  );
}

export default App;
