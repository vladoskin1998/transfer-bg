import React from 'react'
import Box from '@mui/material/Box';
import MainNavbar from './main-navbar';
import MainAdvantage from './main-advantage';
import MainContacts from './main-contacts';
import MainDirection from './main-direction';
import MainSlider from './main-slider';
import MainNotPay from './main-notpay';
import MainFooter from './main-footer';
import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-scroll';

const Main = () => {

    const theme = createTheme()
    const isPC = useMediaQuery(theme.breakpoints.up('md'))

    return (
        <Box className='main'>
            <MainNavbar isPC={isPC} />
            <MainAdvantage />
            <MainContacts />
            <MainDirection />
            <MainSlider />
            <MainNotPay />
            <MainFooter isPC={isPC} />
    
        </Box>
    )
}

export default Main