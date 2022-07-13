import React from 'react'
import CachedIcon from '@mui/icons-material/Cached';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { LogoBlack } from '../../svg/logoBlack';
import { useNavigate } from "react-router-dom";
import { useTranslation} from 'react-i18next';

const MainNavbar = ({ isPC }: any) => {

    const navigation = useNavigate()
    const { t } = useTranslation()

    return (
        <Box className='main__navbar'>
            <LogoBlack size={isPC ? 420 : 220} />
            <Box className='main__navbar-title' >
                {t("home.navbar.title.1")}  <CachedIcon />  {t("home.navbar.title.2")}
            </Box>
            <Box className='main__navbar-subtitle' sx={{maxWidth:"720px"}}>
                {t("home.navbar.subtitle")}
            </Box>
            <Button className='main__navbar-button' variant="contained" onClick={() => navigation('/transfer')}>
            {t("home.navbar.buttontransfer")}
            </Button>
        </Box>


    )
}

export default MainNavbar