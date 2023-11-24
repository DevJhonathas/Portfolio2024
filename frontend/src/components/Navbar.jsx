import React from 'react'
//CSS
import "./Navbar.css";

//react router dom
import {NavLink} from "react-router-dom";

//hooks
import { useDispatch } from 'react-redux';
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from 'react-router-dom';

// redux
import { logout, reset } from '../slices/authSlice';

const Navbar = () => {
  const { auth } = useAuth();

  const navigate =  useNavigate();
  const dispath =  useDispatch();

  const handleLogout = () => {
    dispath(logout());
    dispath(reset());

    navigate("/");
  }
  console.log(handleLogout)
  return (
    <div className='container_navbar'>
      <div className={auth ? 'company_name_logged' : 'company_name_not_logged'}>
        <p>
          <NavLink to="/" className="button_navbar_company">portfolio</NavLink>
        </p>
      </div>
      <ul>
        {auth ? (
          <>
            <li>
              <NavLink to="/" className='button_navbar'>Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects" className='button_navbar'>Projetos</NavLink>
            </li>
            <li>
              <NavLink to="/about" className='button_navbar'>About</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" className='button_navbar'>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/create" className='button_navbar'>Create</NavLink>
            </li>
            <li>
              <NavLink to="/update" className='button_navbar'>Update</NavLink>
            </li>
            <li>
              <span onClick={handleLogout} className='button_navbar'>Sair</span>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/" className='button_navbar'>Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects" className='button_navbar'>Projetos</NavLink>
            </li>
            <li>
              <NavLink to="/about" className='button_navbar'>About</NavLink>
            </li>
          </>
        )}


      </ul>
      
    </div>
  )
}

export default Navbar
