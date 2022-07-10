import React from 'react'
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'

const styles = {
    control: (base: any) => ({ ...base, boxShadow: '0 !important', '&:hover': { border: '1px solid black !important' } }),
    indicatorSeparator: () => ({ display: 'none' }),
}
const options = [1, 2, 3].map(n => ({ value: n, label: n }))

const TransferAdditionally = () => {

    const dispatch = useDispatch()
    const { isBabyChair } = useSelector((s: RootState) => s.TransferData)

    return (
        <>
            <Box sx={{ width: '50%' }}>
                <FormGroup>
                    <FormControlLabel control={
                        <Checkbox value={isBabyChair}
                            onChange={() => dispatch({ type: 'TD_IS_BABY_CHAIR' })}
                        />
                    } label="Детское кресло"
                    />
                </FormGroup>
                <Select
                    options={options}
                    classNamePrefix="react-select"
                    styles={{ ...styles }}
                    placeholder='Количество'
                    isSearchable={false}
                    onChange={(e) => dispatch({ type: 'TD_BABY_CHAIR', payload: e })}
                />
            </Box>
        </>
    )
}

export default TransferAdditionally