//redux
import {login, reset} from   "../../slices/authSlice";
import { UseSelector,  useDispatch, useSelector } from "react-redux";

//Hooks
import { useState,  useEffect } from "react";

const Projects = () => {
  const [projetos, setProjetos] = useState([]);

  const dispath = useDispatch();

  const {loading,  error} =  useSelector((state) => state.auth);


  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="login">
      <h1>Área De Administrador</h1>
      <p>Gentileza preencha os campos para poder entrar como administrador.</p>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Login" required/>
        <input type="email" placeholder="Email" required/>
        <input type="password" placeholder="Senha" required/>
        <input type="password" placeholder="Confirme a senha" required/>
        <input type="submit"  value="Entrar" />
      </form>
    </div>
  )
}

export default Projects