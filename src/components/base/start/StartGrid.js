import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { GridList, GridTile, RaisedButton, Dialog, FlatButton } from 'material-ui'
import { blueA700 } from 'material-ui/styles/colors'

import Login from '../login/Login'
import Signup from '../signup/Signup'

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    gridList: {
        height: '100vh',
        width: '100%'
    },
    gridCell: {
        height: '33vh'
    },
    img: {
        objectFit: 'cover'
    },
    actionsLabel: {
        textTransform: 'none'
    }
}

class StartGrid extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            loginOpen: false,
            signupOpen: false,
            signupUserSuccessDialog: false
        }
    }

    handleCloseLogin = () => {
        this.setState({ loginOpen: false })
    }

    handleOpenLogin = () => {
        this.setState({ loginOpen: true })
    }

    handleCloseSignup = (dialogClosing, creationSuccess = false) => {
        let newState
        if(creationSuccess) {
            newState = { signupOpen: false, signupUserSuccessDialog: true }
        } else {
            newState = { signupOpen: false }
        }
        this.setState(newState)
    }

    handleOpenSignup = () => {
        this.setState({ signupOpen: true })
    }

    handleCloseConfirmationSignupDialog = () => {
        this.setState({ signupUserSuccessDialog: false })
    }

    render() {
        const { posts } = this.props
        const { loginOpen, signupOpen, signupUserSuccessDialog } = this.state

        return (
            <div style={styles.root}>
                <GridList
                    cols={3}
                    cellHeight={'auto'}
                    padding={1}
                    style={styles.gridList}
                >
                    {posts.map((post, index) => {
                        return index !== 4 ? (
                            <GridTile
                                key={index}
                                style={styles.gridCell}
                                containerElement={<div className="grid-cell" />}
                                title={post.title}
                                subtitle={<span>{post.content}</span>}
                            >
                                {post.photo && post.photo !== 'no_photo' ?
                                    <img style={styles.img} src={post.photo} alt={post.title} />
                                    : <img style={styles.img} src="/assets/no-image.jpg" alt={post.title} />}
                            </GridTile>) : (<GridTile key={index} style={styles.gridCell}>
                                <div className="start-center-container">
                                    <div className="logo-container">
                                        <h1 className="logo" style={{ color: blueA700 }}>My Blog</h1>
                                    </div>
                                    <div className="actions-container">
                                        <div className="start__btn-wrapper" style={{ width: '70%' }}>
                                            <RaisedButton
                                                label="Signup"
                                                labelStyle={styles.actionsLabel}
                                                primary={true}
                                                fullWidth={true}
                                                onClick={this.handleOpenSignup}
                                            />
                                        </div>
                                        <div className="start__btn-wrapper" style={{ width: '50%' }}>
                                            <RaisedButton
                                                label="Sign In"
                                                labelStyle={styles.actionsLabel}
                                                fullWidth={true}
                                                secondary={true}
                                                onClick={this.handleOpenLogin}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </GridTile>);
                    })}
                </GridList>
                <Signup onClose={this.handleCloseSignup} isOpen={signupOpen} />
                <Login onClose={this.handleCloseLogin} isOpen={loginOpen} />
                <Dialog
                title='fodaci'
                open={signupUserSuccessDialog}
                onRequestClose={this.handleCloseConfirmationSignupDialog}
                actions={[
                    <FlatButton
                        label="OK"
                        primary
                        keyboardFocused={true}
                        onClick={this.handleCloseConfirmationSignupDialog}
                    />
                ]}
            >
            Account Created
            </Dialog>
            </div>
        );
    }
}

StartGrid.propTypes = {
    posts: PropTypes.array.isRequired
}

export default StartGrid