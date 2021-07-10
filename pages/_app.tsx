import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import Layout from "../components/layout/Layout";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="light"></ColorModeScript>
      <Layout>
        <link rel="shortcut icon" href={prefix + "/favicon.ico"} />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;
