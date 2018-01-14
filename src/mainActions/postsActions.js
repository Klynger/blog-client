import { RECIEVE_POSTS } from './actionTypes'

export const recievePosts = (posts) => ({
    type: RECIEVE_POSTS,
    posts
})
