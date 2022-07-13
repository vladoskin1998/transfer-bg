import React, {useState} from 'react';
import Select from 'react-select';
import { LanguageEnum } from '../../enums/enums';
import { SelectInterface } from '../../types/types'
import { useTranslation} from 'react-i18next';

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

    const [language, setLanguage] = useState<SelectInterface<LanguageEnum>>({ label: LanguageEnum.EN, value: LanguageEnum.EN } )
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang: any) => {
        setLanguage(lang)
        i18n.changeLanguage(lang.value);
    }

    return (
        <Select options={arrLanguage}
            defaultValue={language}
            classNamePrefix="react-select"
            styles={{ ...styles }}
            blurInputOnSelect={true}
            isSearchable={false}
            onChange={changeLanguage}
        />
    );
}

export default SelectLanguage