import { ADD_TOKEN } from '../mainActions/actionTypes'

const DEFAULT_STATE = {
    token: null
}

export function auth(state = DEFAULT_STATE, action) {

    switch(action.type) {
        case ADD_TOKEN:
            return {
                ...state,
                token: action.token
            }
        default:
            return state
    }
}
