import React, { useState } from "react";
import './style.css';

import Logo from '../../assets/logo.png';

function initialState() {
  return { user: "", password: "" };
}

export default () => {
  const [values, setValues] = useState(initialState);

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  return (
    <div className="login">
      <form>
      <img src={Logo}/>
        <div className="form-control">
          <label>Usuário</label>
          <input
            id="user"
            type="text"
            name="user"
            onChange={onChange}
            value={values.user}
            placeholder='Insira seu usuário aqui'
          />
        </div>
        <div className="form-control">
          <label>Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={onChange}
            value={values.password}
            placeholder='Insira sua senha aqui'
          />
        </div>
        <button type="submit">ENTRAR</button>
        <a href=''>Cadastrar-se</a>
      </form>
    </div>
  );
};
