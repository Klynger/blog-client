import { RECIEVE_DEFAULT_POSTS } from './StartActions'

const DEFAULT_STATE = {
    defaultPosts: []
}

export function start(state = DEFAULT_STATE, action) {
    switch (action.type) {

        case RECIEVE_DEFAULT_POSTS:
            return {
                ...state,
                defaultPosts: action.posts.map(post => post.id)
            }

        default:
            return state
    }
}
