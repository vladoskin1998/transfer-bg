import React from 'react'
import Box from '@mui/material/Box';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTranslation } from 'react-i18next';

const passat = require('../../svg/passat.png') as string
const mazdamvp = require('../../svg/mazdamvp.png') as string
const mazda = require('../../svg/mazda.png') as string

const arrCars = [
    { img: mazda, label: 'ECONOM', passanger: 4 },
    { img: passat, label: '+COMFORT', passanger: 4 },
    { img: mazdamvp, label: 'MINIBUS', passanger: 4 },
]

const MainSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        className: 'main__slider-slick',
        speed: 500,
        pauseOnDotsHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <ArrowForwardIosIcon sx={{ width: '40px', height: '40px' }} /> as JSX.Element,
        prevArrow: <ArrowBackIosIcon sx={{ width: '40px', height: '40px' }} /> as JSX.Element,
    };

    const { t } = useTranslation()

    return (
        <Box className='main__slider'>
            <Box className='main__advantage-title'>
                {t("home.cars.title")}
            </Box>
            <Slider {...settings} >
                {
                    arrCars.map(
                        (c) => <Box>
                            <Box component='img' src={c.img} className='main__slider-slick_img' />
                            <Box className='main__slider-slick_subtitle'>
                                {c.label}
                            </Box>
                            <Box className='main__slider-slick_subtitle'>
                                {c.passanger} passanger
                            </Box>
                        </Box>

                    )
                }


            </Slider>
        </Box>

    )
}

export default MainSlider