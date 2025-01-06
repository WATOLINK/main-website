import styled, { ThemeProvider } from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { theme } from '../theme'
import '../styles.css'

const App = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    margin: 0;
    overflow-x: hidden;
`

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <App>
                <div>
                    <Header />
                    <Component {...pageProps} />
                </div>
                <Footer page={Component.name} />
            </App>
        </ThemeProvider>
    )
}

export default MyApp