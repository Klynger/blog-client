import { combineReducers } from 'redux'
import { posts } from './posts'
import { start } from '../components/base/start/startReducer'

export default combineReducers({
    posts,
    start
})
