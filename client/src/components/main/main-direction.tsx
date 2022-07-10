import React from 'react'
import Box from '@mui/material/Box';

const europe = require('../../svg/europe.png') as string

const MainDirection = () => {
    return (
        <Box className='main__direction'>
            <Box className='main__advantage-title'>
                ОСНОВНЫЕ НАПРАВЛЕНИЯ
            </Box>
            <Box component='img'
                className='main__direction-img'
                src={europe}
            />
        </Box>

    )
}

export default MainDirection