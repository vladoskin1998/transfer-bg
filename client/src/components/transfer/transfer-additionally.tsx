import React from 'react'
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import { useTranslation } from 'react-i18next';

const styles = {
    control: (base: any) => ({ ...base, boxShadow: '0 !important', '&:hover': { border: '1px solid black !important' } }),
    indicatorSeparator: () => ({ display: 'none' }),
}
const options = [1, 2, 3].map(n => ({ value: n, label: n }))

const TransferAdditionally = () => {

    const dispatch = useDispatch()
    const { isBabyChair } = useSelector((s: RootState) => s.TransferData)
    const { t } = useTranslation()
    
    return (
        <>
            <Box sx={{ width: '50%' }}>
                <FormGroup>
                    <FormControlLabel className="transfer__checkbox" control={
                        <Checkbox value={isBabyChair}
                            onChange={() => dispatch({ type: 'TD_IS_BABY_CHAIR' })}
                        />
                    } label={t("transfer.child")}
                    />
                </FormGroup>
                <Select
                    isDisabled={!isBabyChair}
                    options={options}
                    classNamePrefix="react-select"
                    styles={{ ...styles }}
                    placeholder={t("transfer.quantity")}
                    isSearchable={false}
                    onChange={(e) => dispatch({ type: 'TD_BABY_CHAIR', payload: e })}
                />
            </Box>
        </>
    )
}

export default TransferAdditionally