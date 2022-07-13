import React from 'react'
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';


const NavList = () => {

    const navigation = useNavigate()
    const { t } = useTranslation()


    const link = [
        { label: t("navbar.Home"), value: '/' },
        { label: t("navbar.Prices"), value: '/price' },
        { label: t("navbar.FAQ"), value: '/faq' },
    ]

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