import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppBar, IconButton, FlatButton } from 'material-ui'
import ActionPolymer from 'material-ui/svg-icons/action/polymer'

import { removeToken } from '../../mainActions/authActions'

class BlogBar extends Component {

    logout = () => {
        localStorage.removeItem('token')
        this.props.removeToken()
        this.props.history.push('/start')
    }

    render() {

        return (
            <AppBar
                title="My Blog"
                iconElementLeft={<IconButton><ActionPolymer /></IconButton>}
                iconElementRight={<FlatButton label="Logout" onClick={this.logout} />}
            >
                
            </AppBar>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeToken: () => dispatch(removeToken())
    }
}
export default connect(null, mapDispatchToProps)(withRouter(BlogBar))