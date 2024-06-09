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
        <div className='company_name'>
            <NavLink to="/" className="button_navbar_company"><p className='title-footer'>portfolio</p></NavLink>
          <p className='subtitle-footer'>"Acredite em si mesmo e conquiste seus sonhos".</p>
        </div>
          <ul className='container-lista'>
              <li>
                  <a href="https://github.com/DevJhonathas" target="_blank" rel='noreferrer'>
                      <img src={github} alt='Github'/>
                      <p>Github</p>
                  </a>
              </li>
              <li>
                  <a href="https://www.instagram.com/jhonathas921/" target="_blank" rel='noreferrer'>
                      <img src={instagram} alt="Instagram" />
                      <p>Instagram</p>
                  </a>
              </li>
              <li>
                  <a href="https://www.linkedin.com/in/jhonathas-souza-33891b245/" target="_blank" rel='noreferrer'>
                      <img src={linkedin} alt="Linkedin" />
                      <p>Linkdin</p>
                  </a>
              </li>
          </ul>
          <ul className='lista-links'>
                {auth ? (
                  <div className='links-footer'>
                    <li>
                      <NavLink to="/" className='button_navbar_desktop'><p className='text-footer'>Home</p></NavLink>
                    </li>
                    <li>
                      <NavLink to="/projects" className='button_navbar_desktop'><p className='text-footer'>Projetos</p></NavLink>
                    </li>
                    <li>
                      <NavLink to="/about" className='button_navbar_desktop'><p className='text-footer'>Sobre mim</p></NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard" className='button_navbar_desktop'><p className='text-footer'>Dashboard</p></NavLink>
                    </li>
                    <li>
                      <NavLink to="/create" className='button_navbar_desktop'><p className='text-footer'>Create</p></NavLink>
                    </li>
                    <li>
                      <NavLink to="/update" className='button_navbar_desktop'><p className='text-footer'>Update</p></NavLink>
                    </li>
                    <li>
                      <span onClick={handleLogout} className='button_navbar_desktop'><p className='text-footer'>Sair</p></span>
                    </li>
                  </div>
                ) : (
                  <div className='links-footer'>
                    <li>
                      <NavLink to="/" className='button_navbar_desktop'><p className='text-footer'>Home</p></NavLink>
                    </li>
                    <li>
                      <NavLink to="/projects" className='button_navbar_desktop'><p className='text-footer'>Projetos</p></NavLink>
                    </li>
                    <li>
                      <NavLink to="/about" className='button_navbar_desktop'><p className='text-footer'>Sobre mim</p></NavLink>
                    </li>
                  </div>
                )}
            </ul>
          </div>
    </footer>
  )
}

export default Footer