import axios from 'axios'
import { TransportDataInterface } from '../types/types'
import { LanguageEnum } from '../enums/enums'

const baseURL = window.location.origin === 'http://localhost:3000'
    ? 'http://localhost:5000'
    : window.location.origin

const $api = axios.create({
    baseURL: `${baseURL}/api/`
})

export const apiListCity = async (name: string, lang: string) => await $api.get(`get-all-cities/?city=${name}&&lang=${lang}`)

export const apiSendMail = async (mail: TransportDataInterface) => await $api.post('send-transfer', { mail })

export const apiGetPrice = async (lang: LanguageEnum) => await $api.get(`get-price/?lang=${lang}`)
