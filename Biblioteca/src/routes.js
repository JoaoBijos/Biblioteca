import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from '../src/pages/login/index';
import Home from '../src/pages/home/index';
import Teste from '../src/components/dropdownMenu/index';

export default () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/home" component={Home}/>
            </Switch>
        </BrowserRouter>
    );
}

