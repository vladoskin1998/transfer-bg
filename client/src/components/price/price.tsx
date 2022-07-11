import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PriceList from './price-list';
import { useNavigate } from "react-router-dom";
import { apiGetPrice } from '../../api/api';
import { LanguageEnum } from '../../enums/enums';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { GetPriceInterface } from '../../types/types';
import { AxiosResponse } from 'axios';

const Price = () => {

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
                    НАПРАВЛЕНИЯ ИЗ/В <br />
                    АЭРОПОРТ СТАМБУЛ IST
                </Box>
                <Box className='price__subtitle'>
                    Трансфер из нового аэропорта Стамбул / в новый аэропорт Стамбул <br />
                    к черноморским и горнолыжным курортам Болгарии
                </Box>
                <PriceList list={priceLists.stambulList}/>
                <Box className='price__subtitle price__subfootertitle'>
                    Мы также предоставляем услугу трансфера из / в аэропорт Сабиха Гекчен, Стамбул SAW.
                    В связи с удалённостью данного аэропорта и загруженностью дорог в Стамбуле стоимость поездки увеличится на 50 € в сравнении со стоимостью трансфера в новый аэропорт Стамбул.
                </Box>
                <Box className='line'></Box>
                <Box className='main__advantage-title'>
                    НАПРАВЛЕНИЯ ИЗ/В <br />
                    АЭРОПОРТ БУРГАС
                </Box>
                <Box className='price__subtitle'>
                    Трансфер из аэропорта Бургас / в аэропорт Бургас<br />
                    к черноморским и горнолыжным курортам Болгарии
                </Box>
                <PriceList list={priceLists.burgasList}/>
                <Button className='main__navbar-button' variant="contained" onClick={() => navigation('/transfer')}>
                    ЗАКАЗАТЬ ТРАНСФЕР
                </Button>
            </Box>
        </Box>

    )
}

export default Price