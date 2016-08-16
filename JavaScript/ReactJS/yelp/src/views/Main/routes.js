import React from 'react'
import {Route} from 'react-router'
import Container from './Container'

export const makeMainRoutes = () => {
    return (
        <Route path="/" component={Container} />
    )
}

export default makeMainRoutes;