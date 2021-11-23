import * as React from "react"
import customTheme from "../lib/theme"

// 1. import `ChakraProvider` component
import { ChakraProvider,CSSReset } from "@chakra-ui/react"


export default function App({ Component, pageProps }) {
  // 2. Use at the root of your app
  return (
    <ChakraProvider theme={customTheme}>
        <CSSReset />
      <Component {...pageProps}/>
    </ChakraProvider>
  )
}