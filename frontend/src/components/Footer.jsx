import React from 'react'

// CSS
import "./Footer.css"

// img
import github from "../images/svg/github.svg";
import instagram from "../images/svg/instagram.svg";
import linkedin from "../images/svg/linkedin.svg";

//react router dom
import {NavLink} from "react-router-dom";

//hooks
import { useDispatch } from 'react-redux';
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from 'react-router-dom';

// redux
import { logout, reset } from '../slices/authSlice';

const Footer = () => {
  const { auth } = useAuth();

  const navigate =  useNavigate();
  const dispath =  useDispatch();

  const handleLogout = () => {
    dispath(logout());
    dispath(reset());

    navigate("/");
  }

  return (
    <footer>
      <div className="footer-container">
          <ul className='container-lista'>
              <li>
                  <a href="https://github.com/DevJhonathas" target="_blank" rel='noreferrer'>
                      <img src={github} alt='Github'/>
                  </a>
              </li>
              <li>
                  <a href="https://www.instagram.com/jhonathas921/" target="_blank" rel='noreferrer'>
                      <img src={instagram} alt="Instagram" />
                  </a>
              </li>
              <li>
                  <a href="https://www.linkedin.com/in/jhonathas-souza-33891b245/" target="_blank" rel='noreferrer'>
                      <img src={linkedin} alt="Linkedin" />
                  </a>
              </li>
          </ul>
          <div className='company_name'>
            <p>
              <NavLink to="/" className="button_navbar_company">portfolio</NavLink>
            </p>
          </div>
            <ul className='lista-links'>
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
    </footer>
  )
}

export default Footer