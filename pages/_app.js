// where the first line of application's instruction starts
// Setting the Routes for Navigation

import * as React from "react";
import theme from "../lib/theme";
import Layout from "../components/layouts/main";
import Fonts from "../components/fonts";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";

export default function App({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <Footer />
      </Layout>
    </ChakraProvider>
  );
}
