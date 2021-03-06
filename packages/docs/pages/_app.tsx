import '../styles/globals.css'
import 'nextra-theme-docs/style.css'
import type { AppProps } from 'next/app'

function Nextra({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default Nextra
