import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

// Configure chainId below
const activeChainId = ChainId.Goerli

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThirdwebProvider desiredChainId={activeChainId}>
    <Component {...pageProps} />
  </ThirdwebProvider>
  )
}

export default MyApp
