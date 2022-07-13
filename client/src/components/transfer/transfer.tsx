import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import TransferDate from './transfer-date';
import TransferAdditionally from './transfer-additionally';
import TransferLocation from './transfer-location';
import TransferInfo from './transfer-info';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { apiSendMail } from '../../api/api';
import { useNavigate } from "react-router-dom";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import * as Scroll from 'react-scroll';
import { useTranslation } from 'react-i18next';

let scroll = Scroll.animateScroll;

const Transfer = () => {

    const dispatch = useDispatch()
        const { t } = useTranslation()
    const navigation = useNavigate()
    const { TransferData } = useSelector((s: RootState) => s)
    const [validation, setValidation] = useState({
        name: false,
        phone: false,
    })


    const sendMail = () => {
        if (!TransferData.name) {
            scroll.scrollToTop()
            setValidation(s => ({ ...s, name: true }))
            return
        }
        if (!TransferData.phone) {
            scroll.scrollToTop()
            setValidation(s => ({ ...s, phone: true }))
            return
        }
        apiSendMail(TransferData)
            .then(() => navigation('/transfer/popup'))
            .catch(e => console.log(e))
    }

    return (
        <Box className='transfer'>
            <Box className='main__advantage-title' >
                {t('transfer.title')}
            </Box>
            <Box className='transfer__inputs'>
                <TextField className={validation.name && !TransferData.name ? 'transfer__error-name' : ''}
                    placeholder={t("transfer.name")}
                    variant="outlined"
                    value={TransferData.name}
                    onChange={(e) => dispatch({ type: 'TD_NAME', payload: e.target.value })}
                />
                <TransferDate />
                <TransferLocation />
                <PhoneInput className={validation.phone && !TransferData.phone ? 'transfer__error-phone' : ''}
                    placeholder={t("transfer.numofpass")}
                    value={TransferData.phone}
                    onChange={(e) => dispatch({ type: 'TD_PHONE', payload: e })}
                />
                <TransferInfo />
                <TransferAdditionally />
                <Box>
                    <Box className='transfer__inputs-title'>
                        {t("transfer.comment")}
                    </Box>
                    <TextareaAutosize
                        className='transfer__inputs-textarea'
                        minRows={3}
                        onChange={(e) => dispatch({ type: 'TD_COMMENTS', payload: e.target.value })}
                    />
                </Box>
                <Button className='main__navbar-button'
                    onClick={sendMail}
                    variant="contained"
                    sx={{ margin: '0 auto', marginTop: '20px' }}
                >
                    ЗАКАЗАТЬ ТРАНСФЕР
                </Button>
            </Box>
        </Box>
    )
}

export default Transfer