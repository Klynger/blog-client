import { request } from '../../../utils/HTTPClient'
import { recievePosts } from '../../../mainActions/postsActions'

import { queryDefaultPosts } from './StartQueryGenerator'

export const RECIEVE_DEFAULT_POSTS = 'RECIEVE_DEFAULT_POSTS'

export const recieveDefaultPosts = posts => ({
    type: RECIEVE_DEFAULT_POSTS,
    posts
})

export const fetchDefaultPosts = () => dispatch => (
    request(queryDefaultPosts())
        .then(response => {
            dispatch(recievePosts(response.data.posts));
            dispatch(recieveDefaultPosts(response.data.posts));
        })
)
