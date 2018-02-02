import React, { Component } from 'react'
import { connect } from 'react-redux'

import Post from './Post'

const styles = {
    postContainer: {
        margin: '10px'
    }
}

class PostList extends Component {

    render() {

        const { postsToShow } = this.props
        return (
            <div>
                {postsToShow.map((post, i) => (
                    <div key={i} style={styles.postContainer}>
                        <Post post={post} />
                    </div>
                ))}
            </div>
        )
    }
}

function mapStateToProps(state = {}, ownProps) {
    const idsToShow = state.posts.allIds
        .slice(state.timeline.postsCurrentShowing.offset,
            state.timeline.postsCurrentShowing.firsts+1)
    return {
        postsToShow: idsToShow.map(postId => state.posts.byId[postId])
    }
}

export default connect(mapStateToProps)(PostList)