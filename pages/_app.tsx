import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from "@next/font/google";
import { createTheme, ThemeProvider } from '@mui/material';

const roboto = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin']
})

const basicTheme=createTheme();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ basicTheme }>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
