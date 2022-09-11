import { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import { theme } from '../theme'

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
