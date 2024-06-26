import React from 'react'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Packages from './PackageLocationComponent';
import MapDisplay from './MapDisplayComponent';
import AgentLocation from './AgentLocationComponent';

import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

function Main(){

    return(
        <React.Fragment>
            <Header/>
            <BrowserRouter>
                <Switch>
                    <Route path='/agents' component={AgentLocation}/>
                    <Route path='/packages' component={Packages}/>
                    <Route path='/maps' component={MapDisplay}/>
                    {/* default redirect */}
                    <Redirect to='/agents'></Redirect>
                </Switch>
            </BrowserRouter>
            <Footer/>
        </React.Fragment>
        
    )    
}

export default withRouter(Main);