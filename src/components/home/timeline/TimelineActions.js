
export const UPDATE_CURRENT_SHOWING = 'UPDATE_CURRENT_SHOWING'

export const updateCurrentShowing = (firsts = 0, offset = 0) => ({
    type: UPDATE_CURRENT_SHOWING,
    firsts,
    offset
})
