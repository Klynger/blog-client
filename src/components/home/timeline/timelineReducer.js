import { UPDATE_CURRENT_SHOWING } from './TimelineActions'

const DEFAULT_STATE = {
    postsCurrentShowing: {
        firsts: 5,
        offset: 0
    }
}

export function timeline(state = DEFAULT_STATE, action) {

    switch (action.type) {

        case UPDATE_CURRENT_SHOWING:
            return {
                ...state,
                postsCurrentShowing: {
                    firsts: action.firsts,
                    offset: action.offset
                }
            }

        default:
            return state
    }
}
