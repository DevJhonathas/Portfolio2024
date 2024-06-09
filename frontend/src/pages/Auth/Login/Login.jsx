// CSS
import "./Login.css";

//redux
import { reset, login } from "../../../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

//Componts
import MessageValidations from "../../../components/Messages/MessageValidations";

//hook
import { useState, useEffect } from "react";
import React from 'react';

const Login = () => {
  const [email,  setEmail] = useState("");
  const [password,  setPassword] = useState("");

  const dispath = useDispatch();

  const {loading,  error} =  useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

      dispath(login(user));
  };
  
  //clean all auth states
  useEffect(() => {
    dispath(reset());
  }, [dispath]);
  
  return (
    <div className="container_login">
      <h1>Área De Administrador</h1>
      <p>Gentileza preencha os campos para poder entrar como administrador.</p>

      <div className="login">
        <form onSubmit={handleSubmit}>
          <input type="email" 
          placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
          required
          />

          <input type="password" 
          placeholder="Senha" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
          required
          />

          {!loading && <input type="submit" value="Entrar"/>}
          {loading && <input type="submit" value="Aguarde..." disabled/>}
          {error &&  <MessageValidations msg={error} type="error"/>}
        </form>
      </div>
  </div>
  )
}

export default Login