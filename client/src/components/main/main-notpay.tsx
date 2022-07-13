import React from 'react'
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';

const moon = require('../../svg/moon.png') as string
const child = require('../../svg/child.png') as string
const cup = require('../../svg/cup.png') as string
const clock = require('../../svg/clock.png') as string



const MainNotPay = () => {

    const { t } = useTranslation()

    const arrService = [
        { img: moon, label: t("home.notpay.notpay.1") },
        { img: child, label: t("home.notpay.notpay.2") },
        { img: cup, label: t("home.notpay.notpay.3") },
        { img: clock, label: t("home.notpay.notpay.4") },
    ]

    return (
        <Box className='main__notpay'>
            <Box className='main__notpay-title'>
                {t("home.notpay.title.1")}
                <Box >{t("home.notpay.title.2")}</Box>
                {t("home.notpay.title.3")}
            </Box>
            <Box className='main__notpay-service'>
                {
                    arrService.map((s) =>
                        <Box className='main__notpay-service_item'>
                            <Box src={s.img} component='img' />
                            <Box className='main__notpay-service_item--title'>{s.label}</Box>
                        </Box>
                    )
                }
            </Box>
        </Box>

    )
}

export default MainNotPay