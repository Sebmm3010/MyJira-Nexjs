import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from "@next/font/google";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from '../themes';
import { SnackbarProvider } from 'notistack';
import { UIProvider, EntriesProvider } from '../context';

const roboto = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3}>
      <EntriesProvider>
        <UIProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <main className={roboto.className}>
              <Component {...pageProps} />
            </main>
          </ThemeProvider>
        </UIProvider>
      </EntriesProvider>
    </SnackbarProvider>
  )
}
