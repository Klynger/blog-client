import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../../../mainActions/postsActions'
import PostList from './PostList'
import { updateCurrentShowing } from './TimelineActions'

const POSTS_IN_A_PAGE = 5

class Timeline extends Component {

    componentDidMount() {
        const {
            lengthPosts, firstsPosts, offset,
            fetchPostsFromServer
        } = this.props

        if (firstsPosts + offset >= lengthPosts) {
            fetchPostsFromServer(firstsPosts - Math.abs(lengthPosts - offset), lengthPosts)
                .then(() => {
                    let firstsToShow, offsetOfPosts

                    if (this.props.lengthPosts === 0) {
                        firstsToShow = 0
                        offsetOfPosts = 0
                    } else {
                        if(this.props.firstsPosts + this.props.offset > this.props.lengthPosts) {
                            offsetOfPosts = Math.floor(this.lengthPosts / POSTS_IN_A_PAGE) * POSTS_IN_A_PAGE
                            firstsToShow = this.lengthPosts - offsetOfPosts
                        }
                    }

                    updateCurrentShowing(firstsToShow, offsetOfPosts)

                })
        }
    }

    render() {
        return (
            <div>
                Timeline works
                <PostList />
            </div>
        )
    }
}

function mapStateToProps(state = {}, ownProps) {
    return {
        firstsPosts: state.timeline.postsCurrentShowing.firsts,
        offset: state.timeline.postsCurrentShowing.offset,
        lengthPosts: state.posts.allIds.length
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPostsFromServer: (firsts, offset) => dispatch(fetchPosts(firsts, offset)),
        updateCurrentShowing: (firsts, offset) => dispatch(updateCurrentShowing(firsts, offset))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timeline)