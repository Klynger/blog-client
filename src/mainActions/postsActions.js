import { request } from '../utils/HTTPClient'

import { RECIEVE_POSTS } from './actionTypes'
import { queryRecievePosts } from '../mainQueryGenerators/PostQueryGenerator'

export const recievePosts = (posts) => ({
    type: RECIEVE_POSTS,
    posts
})

export const fetchPosts = (firsts, offset) => dispatch => (
    request(queryRecievePosts(firsts, offset))
        .then(response => {
            dispatch(recievePosts(response.data.posts))
        })
)
