import React from 'react'
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

const link = [
    { label: 'Главная', value: '/' },
    { label: 'Цены', value: '/price' },
    { label: 'Частыые вопросы FAQ', value: '/faq' },
]

const NavLinks = () => {

    const navigation = useNavigate()

    return <Box className='navbar__router_container' sx={{ display: { xs: 'none', md: 'block' } }}>
        <Box className='navbar__router_route'>
            {
                link.map(l =>
                    <Link underline="hover" component='button' key={l.label} onClick={() => navigation(l.value)}>
                        {l.label}
                    </Link>
                )
            }
        </Box>
    </Box>
}

export default NavLinks