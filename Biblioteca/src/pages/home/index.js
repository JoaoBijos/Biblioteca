import React from 'react';
import './style.css';

import Header from '../../components/header/index';
import CapaLivro  from '../../assets/coraline capa.png';

export default () => {
    return(
        <div className='container'>
            <Header/>
            <div className='content'>
                <h1>Livros Disponíveis</h1>
                <section className='rowList'>
                    <h2>Bibliografia</h2>
                    <div>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                    </div>
                </section>
                <section className='rowList'>
                    <h2>Romance</h2>
                    <div>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                    </div>
                </section>
                <section className='rowList'>
                    <h2>Romance</h2>
                    <div>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                        <img src={CapaLivro}/>
                    </div>
                </section>
            </div>
        </div>
    )
}