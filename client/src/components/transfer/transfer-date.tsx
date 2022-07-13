import React from 'react'
import Box from '@mui/material/Box';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import { useTranslation } from 'react-i18next';

const TransferDate = () => {

    const dispatch = useDispatch()
    const { time, date } = useSelector((s: RootState) => s.TransferData)
    const { t } = useTranslation()
    
    const handleChange = (newValue: Date | string) => {
        dispatch({ type: "TD_TIME", payload: newValue })
    }
    
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box>
                <Box className='transfer__inputs-title'>
                    {t("transfer.datatitle")}
                </Box>
                <Box className='transfer__inputs-date'>
                    <DesktopDatePicker
                        inputFormat="dd:MM:yyyy"
                        value={date}
                        onChange={(d) => dispatch({ type: "TD_DATE", payload: d })}
                        renderInput={(params: any) => <TextField {...params} />}
                    />
                    <TextField type="time"
                        InputLabelProps={{ shrink: true }}
                        inputProps={{ step: 300 }}
                        value={time}
                        onChange={(e) => dispatch({ type: "TD_TIME", payload: e.target.value })}
                    />
                </Box>
            </Box>
        </LocalizationProvider>
    )
}

export default TransferDate