import React from 'react'
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';

const link = [
    { label: 'Главная', value: '/' },
    { label: 'Цены', value: '/price' },
    { label: 'Частыые вопросы FAQ', value: '/faq' },
]

const NavList = () => {

    const navigation = useNavigate()

    return (
        <Box className='navbar__router_route'>
            {
                link.map(l =>
                    <Link underline="hover" component='button' key={l.label} onClick={() => navigation(l.value)} >
                        {l.label}
                    </Link>
                )
            }
        </Box>
    )
}

export default NavList