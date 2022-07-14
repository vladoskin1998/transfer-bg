import { TransportDataInterface } from '../types/types';
import moment from 'moment';

const emptySelect = { label: '', value: '' }


//"2022-07-20T21:00:00.000Z"

const initState: TransportDataInterface = {
    name: '',
    date: moment().format('YYYY-MM-DDTHH:mm'),
    passengers: emptySelect,
    cityFrom: emptySelect,
    cityTo: emptySelect,
    phone: '',
    isBabyChair: false,
    babyChair: emptySelect,
    comments: ''
}

console.log(initState);


export const TransferData = (state = initState, action: { type: string, payload: any }): TransportDataInterface => {
    switch (action.type) {
        case "TD_NAME":
            state = { ...state, name: action.payload }
            return state
        case "TD_DATE":
            state = {
                ...state,
                date: `${action.payload}T${moment(state.date).format('HH:mm')}`
            }
            return state
        case "TD_TIME":
            state = {
                ...state,
                date: `${moment(state.date).format('YYYY-MM-DD')}T${action.payload}`
            }
            return state
        case "TD_CITY_FROM":
            state = { ...state, cityFrom: action.payload }
            return state
        case "TD_CITY_TO":
            state = { ...state, cityTo: action.payload }
            return state
        case "TD_PHONE":
            state = { ...state, phone: action.payload }
            return state
        case "TD_BABY_PASSENGERS":
            state = { ...state, passengers: action.payload }
            return state
        case "TD_IS_BABY_CHAIR":
            state = {
                ...state,
                isBabyChair: !state.isBabyChair,
                babyChair: emptySelect
            }
            return state
        case "TD_BABY_CHAIR":
            state = { ...state, babyChair: action.payload }
            return state
        case "TD_COMMENTS":
            state = { ...state, comments: action.payload }
            return state
        default:
            return state
    }
}

