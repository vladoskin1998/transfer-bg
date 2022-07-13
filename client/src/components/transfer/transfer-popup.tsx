import React from 'react'
import { Box, Button } from '@mui/material';
import { GreenChevron } from '../../svg/green-chevron';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const TransferPopup = () => {

    const navigation = useNavigate()
    const { t } = useTranslation()

    return (
        <Box className='transfer__popup'>
            <Box className='transfer__popup-body'>
                <Box className='main__advantage-title'>
                    {t("transfer.popup.title")}
                </Box>
                <Box className='transfer__popup-subtitle'>
                    {t("transfer.popup.subtitle")}
                </Box>
                <GreenChevron />
                <Box className='transfer__popup-subtitle'>
                    {t("transfer.popup.undertitle")}
                </Box>
                <Button className='main__navbar-button'
                    onClick={() => navigation('/')}
                    variant="contained"
                    sx={{ margin: '0 auto', marginTop: '20px' }}
                >
                    {t("faq.buttonexit")}
                </Button>
            </Box>
        </Box>
    )
}

export default TransferPopup