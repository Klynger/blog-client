import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Dialog } from 'material-ui'

class Login extends Component {
    static propTypes = {
        onToggle: PropTypes.func.isRequired,
        isOpen: PropTypes.bool.isRequired
    }

    render() {
        const { isOpen, onToggle } = this.props

        return (
            <Dialog 
                title="login"
                actions={[]}
                open={isOpen}
                onRequestClose={onToggle}
            >
                Openned
            </Dialog>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        onToggle: ownProps.onToggle,
        isOpen: ownProps.isOpen
    }
}

export default connect(mapStateToProps)(Login)
