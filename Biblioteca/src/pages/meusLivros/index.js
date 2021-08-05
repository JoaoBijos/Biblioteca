import React from 'react';
import './style.css';

import RowList from '../../components/rowlist/App';

export default () => {
    return(
        <div className='listaLivros'>
            <h1>Meus Livros</h1>
            <RowList/>
        </div>
    )
}