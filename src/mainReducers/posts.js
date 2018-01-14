import { RECIEVE_POSTS } from '../mainActions/actionTypes'

const DEFAULT_STATE = {
    byId: {},
    allIds: []
}

function getAllIds(listPosts) {
    return listPosts.map(post => post.id)
}

export function posts(state = DEFAULT_STATE, action) {

    switch(action.type) {
        case RECIEVE_POSTS:
            return {
                ...state,
                byId: action.posts
                    .reduce((result, post) => ({ ...result, [post.id]: { ...post } }), state.byId),
                allIds: state.allIds.concat(getAllIds(action.posts))
            }

        default:
            return state
    }
}
