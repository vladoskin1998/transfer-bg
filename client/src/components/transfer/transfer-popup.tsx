import React from 'react'
import { Box, Button } from '@mui/material';
import { GreenChevron } from '../../svg/green-chevron';
import { useNavigate } from "react-router-dom";

const TransferPopup = () => {

    const navigation = useNavigate()

    return (
        <Box className='transfer__popup'>
            <Box className='transfer__popup-body'>
                <Box className='main__advantage-title'>
                    СПАСИБО ЗА ЗАКАЗ
                </Box>
                <Box className='transfer__popup-subtitle'>
                    Заявка успешно отправлена
                </Box>
                <GreenChevron />
                <Box className='transfer__popup-subtitle'>
                    С Вами свяжутся <br />
                    в ближайшее время
                </Box>
                <Button className='main__navbar-button'
                    onClick={() => navigation('/')}
                    variant="contained"
                    sx={{ margin: '0 auto', marginTop: '20px' }}
                >
                    ВЕРНУТЬСЯ НА САЙТ
                </Button>
            </Box>
        </Box>
    )
}

export default TransferPopup