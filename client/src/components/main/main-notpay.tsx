import React from 'react'
import Box from '@mui/material/Box';

const moon = require('../../svg/moon.png') as string
const child = require('../../svg/child.png') as string
const cup = require('../../svg/cup.png') as string
const clock = require('../../svg/clock.png') as string

const arrService = [
    { img: moon, label: 'Ночные поездки' },
    { img: child, label: 'Детское кресло' },
    { img: cup, label: 'Перекус: батончики и газировка' },
    { img: clock, label: 'Ожидание задержки рейса' },
]

const MainNotPay = () => {
    return (
        <Box className='main__notpay'>
            <Box className='main__notpay-title'>
                УСЛУГИ, ЗА КОТОРЫЕ
                <Box >НЕ НУЖНО</Box>
                ДОПЛАЧИВАТЬ
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