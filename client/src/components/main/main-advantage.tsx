import React from 'react'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useTranslation} from 'react-i18next';

const time = require('../../svg/time.png') as string
const wheel = require('../../svg/wheel.png') as string
const money = require('../../svg/money.png') as string
const auto = require('../../svg/auto.png') as string

const MainAdvantage = () => {

    const {t} = useTranslation()

    const arrImage = [
        { img: time, label: t("home.advantages.advantage.1") },
        { img: wheel, label: t("home.advantages.advantage.2") },
        { img: auto, label: t("home.advantages.advantage.3") },
        { img: money, label: t("home.advantages.advantage.4") },
    ]

    return (
        <Box className='main__advantage'>
            <Box className='main__advantage-title'>
                {t("home.advantages.title")}
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
            <Box sx={{ padding: '0 18px' }}>
                <Box className='line container'/>
            </Box>
        </Box>

    )
}

export default MainAdvantage




