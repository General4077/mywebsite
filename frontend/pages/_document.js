import { Head, Html, Main, NextScript } from 'next/document'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
 
export default function Document() {
  return (
    <Html data-bs-theme="dark">
      <Head>
      </Head>
      <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
        <body>
          <Main />
          <NextScript />
        </body>
      </ThemeProvider>
    </Html>
  )
}