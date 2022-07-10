import React from 'react';
import AsyncSelect from 'react-select/async';
import { apiListCity } from '../../api/api';
import { useDispatch,useSelector } from 'react-redux'
import { RootState } from '../../store/store';

const styles = {
    control: (base: any) => ({ ...base, boxShadow: '0 !important', '&:hover': { border: '1px solid black !important' } }),
    indicatorSeparator: () => ({ display: 'none' }),
}
const TransferLocation = () => {

    const dispatch = useDispatch()
    const { lang } = useSelector((s: RootState) => s.Language)

    const getListCity = (name: string,) => apiListCity(name, lang.value)
        .then(res => res.data)
        .catch(e => console.log(e))

    return (
        <>
            <AsyncSelect
                styles={{ ...styles }}
                placeholder='Откуда: страна, город'
                cacheOptions
                classNamePrefix="react-select"
                loadOptions={(m) => getListCity(m)}
                defaultOptions
                onChange={(e) => dispatch({ type: 'TD_CITY_FROM', payload: e })}
            />
            <AsyncSelect
                styles={{ ...styles }}
                cacheOptions
                placeholder='Куда: страна, город'
                classNamePrefix="react-select"
                loadOptions={(m) => getListCity(m)}
                defaultOptions
                onChange={(e) => dispatch({ type: 'TD_CITY_TO', payload: e })}
            />
        </>
    )
}

export default TransferLocation