import React from 'react'
import Box from '@mui/material/Box';
import NavList from './nav-list';



const NavLinks = () => {
    
    return <Box className='navbar__router_container' sx={{ display: { xs: 'none', md: 'block' } }}>
        <NavList />
    </Box>
}

export default NavLinks