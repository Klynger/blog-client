import React, { Component } from 'react'

import BlogBar from './BlogBar'
import Timeline from './timeline/Timeline'

const styles = {
    homeContainer: {
        backgroundColor: '#eee',
        height: '100%',
        width: '100%'
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    },
    column: {
        width: '33.333333%'
    }
}

class Home extends Component {
    render() {
        return (
            <div style={styles.homeContainer}>
                <BlogBar />
                <div style={styles.content}>
                    <div style={{ ...styles.column }}></div>
                    <div style={{ ...styles.column }}>
                        <Timeline />
                    </div>
                    <div style={{ ...styles.column }}></div>
                </div>
            </div>
        )
    }
}

export default Home
