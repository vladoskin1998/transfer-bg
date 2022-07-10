import React from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';

const styles = {
    control: (base: any) => ({ ...base, boxShadow: '0 !important', '&:hover': { border: '1px solid black !important' } }),
    indicatorSeparator: () => ({ display: 'none' }),
}

const options = [1, 2, 3, 4, 5].map(n => ({ value: n, label: n }))

const TransferInfo = () => {

    const dispatch = useDispatch()

    return (
        <Select
            defaultValue={options[0]}
            options={options}
            classNamePrefix="react-select"
            styles={{ ...styles }}
            placeholder='Число пассажиров'
            isSearchable={false}
            onChange={(e) => dispatch({ type: 'TD_BABY_PASSENGERS', payload: e })}
        />
    )
}

export default TransferInfo

