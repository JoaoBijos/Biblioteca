import React from 'react';
import './style.css';

import RowList from '../../components/rowlist/App';

export default () => {
    return(
        <div className='listaLivros'>
            <h1>Livros Disponíveis</h1>
            <RowList/>
            <h1>Livros Indisponíveis</h1>
            <RowList/>
        </div>
    )
}