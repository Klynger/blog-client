import React from 'react'
import { Switch, Route } from 'react-router'
import Loadable from 'react-loadable'

import LoadingPage from '../shared/LoadingPage'

const AsyncNotFound = Loadable({
    loader: () => import('../shared/NotFound'),
    loading: LoadingPage
})

const AsyncStart = Loadable({
    loader: () => import('./start/Start'),
    loading: LoadingPage
})

export default () => (
    <Switch>
        <Route path="/" exact component={AsyncStart} />
        <Route component={AsyncNotFound} />
    </Switch>
)
