import { ReactNode } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'

interface PageBoxProps {
    children: ReactNode
}

export const PageBox = ({ children }: PageBoxProps) => {
    const boxBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50')
    return (
        <Box
            flex='1'
            w='full'
            borderRadius={8}
            borderWidth='1px'
            boxShadow='md'
            bg={boxBg}
            p={['6', '8']}
        >
            {children}
        </Box>
    )
}
