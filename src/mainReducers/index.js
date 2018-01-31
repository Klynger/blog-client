import { combineReducers } from 'redux'
import { posts } from './posts'
import { auth } from './auth'
import { start } from '../components/base/start/startReducer'

export default combineReducers({
    auth,
    posts,
    start
})
