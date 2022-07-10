import {LanguageInterface} from '../types/types'
import {LanguageEnum} from '../enums/enums'

const initState: LanguageInterface = {
    lang: { label: LanguageEnum.EN, value: LanguageEnum.EN } 
}

export const Language = (state = initState, action: { type: string, payload: any }): LanguageInterface => {
    switch (action.type) {
        case "L_CHANGE_LANG":
            state = { ...state, lang: action.payload }
            return state
        default:
            return state
    }
}

