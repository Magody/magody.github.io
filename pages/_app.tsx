import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'

const prefix = "/Portfolio"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <link rel="shortcut icon" href={prefix+'/favicon.ico'} />
      <Component {...pageProps} />
    </Fragment>
  );
  
  
}
export default MyApp
