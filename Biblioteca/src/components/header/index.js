import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

import Logo from "../../assets/logo.png";
import Lupa from "../../assets/lupa.png";
import Arrow from '../../assets/arrow.png';

export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <Link to={"/home"} id="lado-esquerdo">
          <img src={Logo} />
        </Link>
        <div className="centro">
          <div>
            <input placeholder="Pesquise aqui o livro que você procura" />
          </div>
        </div>
        <div className="lado-direito">
          <a>João Pedro</a>
          <img src={Arrow} />
        </div>
      </div>
    );
  }
}
