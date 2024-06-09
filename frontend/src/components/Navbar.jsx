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
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  const { auth } = useAuth();

  const navigate =  useNavigate();
  const dispath =  useDispatch();

  const handleLogout = () => {
    dispath(logout());
    dispath(reset());

    navigate("/");
  }
  return (
    <nav>
      <div className="container_navbar">
        <div className='company_name_desktop'>
          <p>
            <NavLink to="/" className="button_navbar_company">portfolio</NavLink>
          </p>
        </div>
        <div>
          <ul className='ul_desktop_navbar'>
              {auth ? (
                <div>
                  <li>
                    <NavLink to="/" className='button_navbar_desktop'>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/projects" className='button_navbar_desktop'>Projetos</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className='button_navbar_desktop'>Sobre mim</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard" className='button_navbar_desktop'>Dashboard</NavLink>
                  </li>
                  <li>
                    <NavLink to="/create" className='button_navbar_desktop'>Create</NavLink>
                  </li>
                  <li>
                    <NavLink to="/update" className='button_navbar_desktop'>Update</NavLink>
                  </li>
                  <li>
                    <span onClick={handleLogout} className='button_navbar_desktop'>Sair</span>
                  </li>
                </div>
              ) : (
                <div>
                  <li>
                    <NavLink to="/" className='button_navbar_desktop'>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/projects" className='button_navbar_desktop'>Projetos</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className='button_navbar_desktop'>Sobre mim</NavLink>
                  </li>
                </div>
              )}
          </ul>
        </div>
      </div>
      <MobileNavbar/>
    </nav>
  )
}

export default Navbar
