import React from 'react'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const time = require('../../svg/time.png') as string
const wheel = require('../../svg/wheel.png') as string
const money = require('../../svg/money.png') as string
const auto = require('../../svg/auto.png') as string

const arrImage = [
    { img: time, label: `Всегда вовремя` },
    { img: wheel, label: 'Опытные водители' },
    { img: auto, label: 'Комфортные автомобили' },
    { img: money, label: 'Приятные цены' },
]


const MainAdvantage = ({isPC}:any) => {

    return (
        <Box className='main__advantage'>
            <Box className='main__advantage-title'>
                ПОЧЕМУ МЫ?
            </Box>
            <ImageList className='main__advantage-list' >
                {
                    arrImage.map((item) => (
                        <Box>
                            <ImageListItem key={item.label} component='img'
                                style={{ width: '80px', height: '80px', objectFit: 'contain' }}
                                src={item.img}
                                alt={'image'}
                                loading="lazy"
                            />
                            <Box width={80} className='main__advantage-list_subtitle'>
                                {item.label}
                            </Box>
                        </Box>
                    ))}
            </ImageList>
            <Box className='line container' sx={{ margin: isPC ? '44px auto 44px' : '35px auto 35px' }} />
        </Box>

    )
}

export default MainAdvantage




