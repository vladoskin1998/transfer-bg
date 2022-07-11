import React from 'react'
import CachedIcon from '@mui/icons-material/Cached';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { LogoBlack } from '../../svg/logoBlack';
import { useNavigate } from "react-router-dom";


const MainNavbar = ({ isPC }: any) => {

    const navigation = useNavigate()

    return (
        <Box className='main__navbar'>
            <LogoBlack size={isPC ? 420 : 220} />
            <Box className='main__navbar-title'>
                Трансфер Европа  <CachedIcon />  Болгария
            </Box>
            <Box className='main__navbar-subtitle'>
                Довезем Вас с любой точки Европы <br />в любую точку Болгарии и обратно
            </Box>
            <Button className='main__navbar-button' variant="contained" onClick={() => navigation('/transfer')}>
                ЗАКАЗАТЬ ТРАНСФЕР
            </Button>
        </Box>


    )
}

export default MainNavbar