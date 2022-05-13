import Head from 'next/head'
import { ChakraProvider, ColorModeScript, ScaleFade } from '@chakra-ui/react'
import { theme } from '../styles/theme'


export default function App({ Component, pageProps, router }) {
    return (
        <>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <ChakraProvider theme={theme}>
                <Head>
                    <title>PaintPack</title>
                    <link
                        rel='icon'
                        type='image/svg+xml'
                        href='/favicon.svg'
                    />
                    <link rel='alternate icon' href='/favicon.ico' />
                    <link
                        rel='mask-icon'
                        href='/safari-pinned-tab.svg'
                        color='#888'
                    />
                </Head>
                    <Component {...pageProps} />
            </ChakraProvider>
        </>
    )
}
