import React from 'react';
import {useHistory} from 'react-router-dom';
import './index.css';

import TesteCapa from '../../assets/coraline capa.png';

export default ({closeModal}) => {

  const history = useHistory();

  const goTo = () => {
    history.push('/meusLivros')
  }

  return(
    <div className='modal-bg'>
      <div className='modal-container'>
        <div className='CloseBtn'>
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className='modal-content'>
          <div className='text'>
            <header>
              <div className='title'>
                Título: Caroline
              </div>
              <div className='sub-title'>
                Autor: Neil Gaiman
              </div>
            </header> 
            <div className='sinopse'>
              <p>
                Sinopse: Certas portas não devem ser 
                abertas. E Coraline descobre isso pouco 
                tempo depois de chegar com os pais à 
                sua nova casa, um apartamento em um 
                casarão antigo ocupado por vizinhos 
                excêntricos e envolto por uma névoa 
                insistente, um mundo de estranhezas e 
                magia, o tipo de universo que apenas 
                Neil Gaiman pode criar.
              </p>
            </div>
          </div>
          <div className='capa-livro'>
            <img src={TesteCapa}/>
          </div>
        </div>
        <footer>
          <button onClick={goTo}>Pegar este livro</button>
        </footer>
      </div>
    </div>
  )
}