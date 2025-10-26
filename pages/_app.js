import styled, { ThemeProvider } from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Head from 'next/head'
import { theme } from '../theme'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles.css'

const App = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    margin: 0;
    overflow-x: hidden;
`

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <App>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Quantico:wght@400;700&display=swap" rel="stylesheet" />
                </Head>
                <Header />
                <Component {...pageProps} />
                <Footer page={Component.name} />
            </App>
        </ThemeProvider>
    )
}

export default MyApp