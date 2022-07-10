import React from 'react'
import Box from '@mui/material/Box';
import { LogoWhite } from '../../svg/logoWhite';

const MainFooter = ({isPC}:any) => {
    return (
        <Box className='main__footer'>
            <LogoWhite size={isPC ? 220 : 120} />
            <Box className='main__footer-title'>
                Made by Vladislav Chornenkyi & Ruslan Ray
                <br />2022
            </Box>
        </Box>

    )
}

export default MainFooter