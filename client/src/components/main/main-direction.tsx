import React from 'react'
import Box from '@mui/material/Box';
import { useTranslation} from 'react-i18next';

const europe = require('../../svg/europe.png') as string

const MainDirection = () => {

    const { t } = useTranslation()

    return (
        <Box className='main__direction'>
            <Box className='main__advantage-title'>
                {t("home.map")}
            </Box>
            <Box component='img'
                className='main__direction-img'
                src={europe}
            />
        </Box>

    )
}

export default MainDirection