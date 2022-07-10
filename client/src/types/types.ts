import {LanguageEnum} from '../enums/enums'



export interface SelectInterface<T = string> {
    value: T,
    label: string
}

export interface LanguageInterface{
    lang: SelectInterface<LanguageEnum>
}

export interface CoordInterface {
    latitude: string,
    longitude: string,
}


export interface TransportDataInterface {
    name: string,
    date: Date | null | string,
    time: null | string,
    passengers: SelectInterface,
    cityFrom: SelectInterface<CoordInterface | string>,
    cityTo: SelectInterface<CoordInterface | string>,
    phone: string,
    isBabyChair: boolean,
    babyChair: SelectInterface,
    comments: string
}