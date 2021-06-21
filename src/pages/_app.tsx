import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyle from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="apple-touch-icon" href="favicon.png" />
        <meta
          name="description"
          content="A simple starter to work with TypeScript, React, NextJS and
          Styled Components"
        />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}
export default App
