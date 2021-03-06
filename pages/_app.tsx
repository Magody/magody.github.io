import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import Layout from "../components/layout/Layout";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"


const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";




const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }: AppProps) {




  return (
    <ChakraProvider theme={theme}>

      <ColorModeScript initialColorMode="dark"></ColorModeScript>
      <Layout>
        <link rel="shortcut icon" href={prefix + "/favicon.ico"} />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;
