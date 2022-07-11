import React from 'react'
import Box from '@mui/material/Box';
import { LogoBlack } from '../../svg/logoBlack';
import SelectLanguage from './select-language';
import NavLinks from './nav-links'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Element } from 'react-scroll';
import { useNavigate, useLocation } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {

    const navigation = useNavigate()
    const { pathname } = useLocation()

    let isPathMobileMenu = pathname === '/mobile-menu'

    return (<Element name="navbar">
        <Box className='navbar' >
            <Box className='container'>
                <Box className='navbar__router' >
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <LogoBlack />
                    </Box>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ display: { xs: 'block', md: 'none' } }}
                        onClick={() => { isPathMobileMenu ? navigation(-1) : navigation('/mobile-menu') }}
                    >
                        {
                            isPathMobileMenu ? <CloseIcon sx={{ color: 'white' }} /> : <MenuIcon sx={{ color: 'white' }} />
                        }
                    </IconButton>
                    <NavLinks />
                    <SelectLanguage />
                </Box>
            </Box>
        </Box>
    </Element>
    )
}

export default NavBar