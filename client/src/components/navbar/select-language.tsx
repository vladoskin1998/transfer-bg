import React from 'react';
import Select from 'react-select';
import { LanguageEnum } from '../../enums/enums';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { SelectInterface } from '../../types/types'

const arrLanguage: SelectInterface<LanguageEnum>[] = []

for (let key in LanguageEnum) {
    arrLanguage.push({ label: key, value: LanguageEnum[key as keyof typeof LanguageEnum] })
}

const styles = {
    control: (base: any) => ({ ...base, border: '0 !important', boxShadow: '0 !important', '&:hover': { border: '0 !important' } }),
    option: (b: any) => {
        return ({ ...b, '&:active': { backgroundColor: 'white' } })
    },
    indicatorSeparator: () => ({ display: 'none' }),
}

const SelectLanguage = () => {

    const dispatch = useDispatch()
    const { lang } = useSelector((s: RootState) => s.Language)

    return (
        <Select options={arrLanguage}
            defaultValue={lang}
            classNamePrefix="react-select"
            styles={{ ...styles }}
            blurInputOnSelect={true}
            isSearchable={false}
            onChange={(e) => dispatch({ type: 'L_CHANGE_LANG', payload: e })}
        />
    );
}

export default SelectLanguage