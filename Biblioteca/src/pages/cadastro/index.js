import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import './style.css';

function initialState() {
  return { user: "", password: "", cpf: "", email: "" };
}

export default () => {
  const history = useHistory();
  const [values, setValues] = useState(initialState);

  function onChange(event) {
    const { value, name, cpf, email } = event.target;

    setValues({
      ...values,
      [name]: value,
      [cpf]: value,
      [email]: value
    });
  }

  const handleSingIn = () => {
    history.push('/login')
  }
  
  return (
    <div className="login">
      <form>
        <h1>Cadastro</h1>
        <section>
          <div className="form-control">
            <label>Usuário</label>
            <input
              id="user"
              type="text"
              name="user"
              onChange={onChange}
              value={values.user}
              placeholder='Insira seu nome aqui'
            />
          </div>
          <div className="form-control">
            <label>CPF</label>
            <input
              id="cpf"
              type="text"
              name="cpf"
              onChange={onChange}
              value={values.cpf}
              placeholder='Insira seu CPF aqui'
            />
          </div>
          <div className="form-control">
            <label>E-mail</label>
            <input
              id="email"
              type="text"
              name="email"
              onChange={onChange}
              value={values.email}
              placeholder='Insira seu e-mail aqui'
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
        </section>
        <button type="submit" onClick={handleSingIn}>CADASTRAR</button>
      </form>
    </div>
  );
};
