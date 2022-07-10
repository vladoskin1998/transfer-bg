import { configureStore } from '@reduxjs/toolkit'
import { TransferData } from '../reducer/transfer-data';
import { Language } from '../reducer/language';
import thunk from 'redux-thunk'

const store = configureStore({
    reducer: {
        TransferData,
        Language,
    },
    middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store