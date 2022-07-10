import React from 'react'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const vb = require('../../svg/vb.png') as string
const tg = require('../../svg/tg.png') as string
const va = require('../../svg/va.png') as string

const arrContacts = [
    { img: va, label: '+359876270576' },
    { img: tg, label: '+359876270576' },
    { img: vb, label: '+359876270576' },
]

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
                            arrContacts.map((item) => (
                                <Box sx={{ display: 'flex', alignItem: 'center', columnGap: '9px' }}>
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
                <Box className='line container' sx={{ margin: '54px auto 40px' }} />
            </Box>

        </>
    )
}

export default MainContacts