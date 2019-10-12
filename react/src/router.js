import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import home from './pages/home/'
import homeuser from './pages/homeuser/'
import immersion from './pages/Immersion/'
import login from './pages/login/'
import upload from './pages/upload/'
import user from './pages/user/'
import video from './pages/video/'
import info from './pages/info/'

function routers() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={home} />
                <Route path='/homeuser/:user/:token' component={homeuser} />
                <Route path='/immersion' component={immersion} />
                <Route path='/login' component={login} />
                <Route path='/upload' component={upload} />
                <Route path='/user' component={user} />
                <Route path='/video/:filesName' component={video} />
                <Route path='/info' component={info} />
            </Switch>
        </BrowserRouter>
    )
}

export default routers