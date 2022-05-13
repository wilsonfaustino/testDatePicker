import { Box } from '@chakra-ui/react'
import { DatePicker } from 'components/Form/DatePicker'
import { PageBox } from 'components/PageBox'

const HomePage = () => {

    return (
        <Box maxW={1480} mx='auto'>
            <PageBox>
            <DatePicker placeholder='Insira a data aqui' value={''} onChange={(value) => console.log(value)} />
        </PageBox>
        </Box>
    )
}

export default HomePage
