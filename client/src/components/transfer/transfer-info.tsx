import React from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

const styles = {
    control: (base: any) => ({ ...base, boxShadow: '0 !important', '&:hover': { border: '1px solid black !important' } }),
    indicatorSeparator: () => ({ display: 'none' }),
}

const options = [1, 2, 3, 4, 5].map(n => ({ value: n, label: n }))

const TransferInfo = () => {

    const dispatch = useDispatch()
    const { t } = useTranslation()
    
    return (
        <Select
            defaultValue={options[0]}
            options={options}
            classNamePrefix="react-select"
            styles={{ ...styles }}
            placeholder={t("transfer.numofpass")}
            isSearchable={false}
            onChange={(e) => dispatch({ type: 'TD_BABY_PASSENGERS', payload: e })}
        />
    )
}

export default TransferInfo

