import React from 'react'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const va = require('../../svg/whatsapp.png') as string
const tg = require('../../svg/telegram.png') as string
const vb = require('../../svg/viber.png') as string
const im = require('../../svg/instagram.png') as string

const arrContacts = [
    { img: va, label: '+359876270576' },
    { img: tg, label: '+359876270576' },
    { img: vb, label: '+359876270576' },
    { img: im, label: 'car_please.bg', href: 'https://instagram.com/car_please.bg?igshid=YmMyMTA2M2Y='},
]

//https://instagram.com/car_please.bg?igshid=YmMyMTA2M2Y=

const MainContacts = () => {
    return (
        <>
            <Box className='main__contacts'>
                <Box className='main__contacts-title'>
                    Если у Вас нет времени заполнить заявку, можно просто написать/позвонить в WhatsApp, Telegram, Viber
                </Box>
                {
                    <ImageList className='main__contacts-contact_list' gap={14}>
                        {
                            arrContacts.map((item, index) => (
                                <Box className={`main__contacts-contact_list-item main__contacts-contact_list-item${index+1}`}>
                                    <ImageListItem key={item.label} component='img'
                                        style={{ width: '30px', height: '30px', objectFit: 'contain' }}
                                        src={item.img}
                                        alt={'image'}
                                        loading="lazy"
                                    />
                                    <Box className='' component='span'>
                                        {item.label}
                                    </Box>
                                </Box>
                            ))}
                    </ImageList>
                }
            </Box>
            <Box sx={{ padding: '0 18px' }}>
                <Box className='line container' />
            </Box>

        </>
    )
}

export default MainContacts