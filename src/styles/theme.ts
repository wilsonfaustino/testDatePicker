import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

export const theme = extendTheme({
    colors: {
        gray: {
            '900': '#181B23',
            '800': '#1F2029',
            '700': '#353646',
            '600': '#4B4D63',
            '500': '#616480',
            '400': '#797D9A',
            '300': '#9699B8',
            '200': '#B3B5C6',
            '100': '#D1D2DC',
            '50': '#EEEEF2',
        },
    },
    fonts: {
        heading: 'Archivo',
        body: 'Archivo',
    },
    global: {
        'input, select': {
            font: 'inherit',
        },
    },
    config,
})
