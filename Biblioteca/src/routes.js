import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from '../src/pages/login/index';
import Home from '../src/pages/home/index';
import MeusLivros from '../src/pages/meusLivros/index';
import Cadastro from '../src/pages/cadastro/index';

export default () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/cadastro" component={Cadastro}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/meuslivros" component={MeusLivros}/>
            </Switch>
        </BrowserRouter>
    );
}

