import React from 'react'
import { CircularProgress } from 'material-ui'

const styles = {
    loaderContainer: {
        height: '100vh',
        position: 'relative',
        width: '100vw'
    },
    loader: {
        left: '50%',
        margin: 0,
        marginRight: '-50%',
        position: 'absolute',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }
}

const LoadingPage = ({ isLoading, error }) => {
    if (isLoading) {
        return (
            <div style={styles.loaderContainer}>
                <CircularProgress style={styles.loader} size={100} thickness={7} />
            </div>
        )
    } else if (error) {
        return (
            <div>
                Something went wrong while trying to load the page =/
            </div>
        )
    } else {
        return null
    }
}

export default LoadingPage