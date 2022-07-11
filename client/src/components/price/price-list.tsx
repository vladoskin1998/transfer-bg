import React from 'react'
import Box from '@mui/material/Box';
import { GetPriceItemInterface } from '../../types/types';

const PriceList = ({ list }: { list: GetPriceItemInterface[] }) => {
    return (
        <Box className='price__table'>
            <Box className='price__table-line' />
            <Box className='price__table_list'>
                {
                    list.map(item => <Box>
                        <Box className='price__table_list-pres'>
                            <Box>{item.city}</Box>
                            <Box>{`${item.price} ${item.currency}`}</Box>
                        </Box>
                        <Box className='price__table-line' />
                    </Box>)    
                }
            </Box>
        </Box>
    )
}

export default PriceList