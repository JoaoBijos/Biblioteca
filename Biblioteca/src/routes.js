import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from '../src/components/header/index';
import Login from '../src/pages/login/index';
import Home from '../src/pages/home/index';
import MeusLivros from '../src/pages/meusLivros/index';
import Cadastro from '../src/pages/cadastro/index';

export default () =>{
    return(
        <BrowserRouter>
        {Route === '/' || '/cadastro' ? null : <Header/>}
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/meuslivros" component={MeusLivros}/>
                <Route exact path="/" component={Login}/>
                <Route exact path="/cadastro" component={Cadastro}/>
            </Switch>
        </BrowserRouter>
    );
}

