import React from 'react'

const LoadingPage = ({ isLoading, error }) => {
    if(isLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    } else if (error) {
        return (
            <div>
                Somethin wen wrong while trying to load the page =/
            </div>
        )
    } else {
        return null
    }
}

export default LoadingPage