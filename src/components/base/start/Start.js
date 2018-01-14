import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchDefaultPosts } from './StartActions'

import StartGrid from './StartGrid'

class Start extends Component {

    componentDidMount() {
        this.props.getDefaultPosts()
    }

    render() {
        
        const { posts } = this.props

        return (
            <div>
                <StartGrid posts={posts} />
            </div>
        )
    }
}

function mapStateToProps(state = {}) {
    return {
        posts: state.start.defaultPosts.map(postId => state.posts.byId[postId])
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getDefaultPosts: () => dispatch(fetchDefaultPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Start)
