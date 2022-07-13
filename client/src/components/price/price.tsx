import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PriceList from './price-list';
import { useNavigate } from "react-router-dom";
import { apiGetPrice } from '../../api/api';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { GetPriceInterface } from '../../types/types';
import { AxiosResponse } from 'axios';
import { useTranslation } from 'react-i18next';

const Price = () => {

    const { t } = useTranslation()
    const navigation = useNavigate()
    const { lang } = useSelector((s: RootState) => s.Language)
    const [priceLists, setPriceLists] = useState<GetPriceInterface>({
        stambulList: [],
        burgasList: []
    })

    useEffect(() => {
        apiGetPrice(lang.value)
            .then((res: AxiosResponse<GetPriceInterface>) => setPriceLists(res.data))
            .catch(e => console.log(e))
    }, [lang])

    return (
        <Box className='price'>
            <Box className='container'>
                <Box className='main__advantage-title'>
                    {t("price.t1")}
                </Box>
                <Box className='price__subtitle'>
                    {t("price.s1")}
                </Box>
                <PriceList list={priceLists.stambulList} />
                <Box className='price__subtitle price__subfootertitle'>
                    {t("price.u1")}
                </Box>
                <Box className='line'></Box>
                <Box className='main__advantage-title'>
                    {t("price.t2")}
                </Box>
                <Box className='price__subtitle'>
                    {t("price.u2")}
                </Box>
                <PriceList list={priceLists.burgasList} />
                <Button className='main__navbar-button' variant="contained" onClick={() => navigation('/transfer')}>
                    {t("home.navbar.buttontransfer")}
                </Button>
            </Box>
        </Box>

    )
}

export default Price