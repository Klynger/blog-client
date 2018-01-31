import { ADD_TOKEN, REMOVE_TOKEN } from '../mainActions/actionTypes'

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

        case REMOVE_TOKEN:
            return {
                ...state,
                token: null
            }
        default:
            return state
    }
}
