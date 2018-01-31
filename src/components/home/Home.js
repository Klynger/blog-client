import React, { Component } from 'react'
import BlogBar from './blog-bar/BlogBar'

const styles = {
    homeContainer: {
        backgroundColor: '#eee',
        height: '100%',
        width: '100%'
    }
}

class Home extends Component {
    render() {
        return (
            <div style={styles.homeContainer}>
                <BlogBar />
            </div>
        )
    }
}

export default Home
