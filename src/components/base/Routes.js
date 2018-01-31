import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Loadable from 'react-loadable'

import LoadingPage from '../shared/LoadingPage'
import AuthRoute from '../shared/AuthRoute'

const AsyncNotFound = Loadable({
    loader: () => import('../shared/NotFound'),
    loading: LoadingPage
})

const AsyncStart = Loadable({
    loader: () => import('./start/Start'),
    loading: LoadingPage
})

const AsyncHome = Loadable({
    loader: () => import('../home/Home'),
    loading: LoadingPage
})

const StartRoute = ({component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        !localStorage.getItem('token') ? (
            <Component {...props} />
        ) : (
            <Redirect to={{
                pathname: '/home',
                state: { from: props.location }
            }}
            />
        )
    )}
    />
)

export default () => (
    <Switch>
        <StartRoute path="/" exact component={AsyncStart} />
        <AuthRoute path="/home" exact component={AsyncHome} />
        <Route component={AsyncNotFound} />
    </Switch>
)
