import React from 'react'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui'
import { blueA400, white } from 'material-ui/styles/colors'
import PropTypes from 'prop-types'

const styles = {
    toolbar: {
        backgroundColor: blueA400
    },

    toolbarTitle: {
        color: white
    }
}

const ModalTitle = (props) => {

    const{ title } = props
    
    return (
        <Toolbar style={styles.toolbar}>
            <ToolbarGroup >
                <ToolbarTitle text={title} style={styles.toolbarTitle} />
            </ToolbarGroup>
        </Toolbar>
    )
}

ModalTitle.propTypes = {
    title: PropTypes.string.isRequired
}

export default ModalTitle
