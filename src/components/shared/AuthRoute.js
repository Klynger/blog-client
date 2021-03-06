import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const AuthRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('token') ? (
            <Component {...props} />
        ) : (
                <Redirect to={{
                    pathname: '/start',
                    state: { from: props.location }
                }}
                />
            )
    )}
    />
)

export default AuthRoute
