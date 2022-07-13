import React from 'react';
import AsyncSelect from 'react-select/async';
import { apiListCity } from '../../api/api';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store';
import { useTranslation } from 'react-i18next';

const styles = {
    control: (base: any) => ({ ...base, boxShadow: '0 !important', '&:hover': { border: '1px solid black !important' } }),
    indicatorSeparator: () => ({ display: 'none' }),
}
const TransferLocation = () => {

    const dispatch = useDispatch()
    const { lang } = useSelector((s: RootState) => s.Language)
    const { t } = useTranslation()
    const getListCity = (name: string,) => apiListCity(name, lang.value)
        .then(res => res.data)
        .catch(e => console.log(e))

    return (
        <>
            <AsyncSelect
                styles={{ ...styles }}
                placeholder={t("transfer.fromlocal")}
                cacheOptions
                classNamePrefix="react-select"
                loadOptions={(m) => getListCity(m)}
                defaultOptions
                onChange={(e) => dispatch({ type: 'TD_CITY_FROM', payload: e })}
            />
            <AsyncSelect
                styles={{ ...styles }}
                cacheOptions
                placeholder={t("transfer.tolocal")}
                classNamePrefix="react-select"
                loadOptions={(m) => getListCity(m)}
                defaultOptions
                onChange={(e) => dispatch({ type: 'TD_CITY_TO', payload: e })}
            />
        </>
    )
}

export default TransferLocation