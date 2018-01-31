import { ADD_TOKEN, REMOVE_TOKEN } from '../mainActions/actionTypes'

export const addToken = (token) => ({
    type: ADD_TOKEN,
    token
})

export const removeToken = () => ({
    type: REMOVE_TOKEN
})