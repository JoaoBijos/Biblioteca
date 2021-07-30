import React from 'react';
import './style.css';

import Header from '../../components/header/index';

export default () => {
    return(
        <div className='container'>
            <Header/>
            <div className='content'>
                <h1>Meus Livros</h1>
            </div>
        </div>
    )
}