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


//icons
import { IoIosHome } from "react-icons/io";
import { AiFillProject } from "react-icons/ai";
import { BsFillQuestionCircleFill  } from "react-icons/bs";

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
    <nav className='container_navbar'>
      <div className='company_name_desktop'>
        <p>
          <NavLink to="/" className="button_navbar_company">portfolio</NavLink>
        </p>
      </div>

      <ul className='ul_desktop_navbar'>
        {auth ? (
          <>
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
          </>
        ) : (
          <>
            <li>
              <NavLink to="/" className='button_navbar_desktop'>Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects" className='button_navbar_desktop'>Projetos</NavLink>
            </li>
            <li>
              <NavLink to="/about" className='button_navbar_desktop'>Sobre mim</NavLink>
            </li>
          </>
        )}
      </ul>
      
      <div className="mobile_container">
        <div className='company_name_mobile'>
          <p>
            <NavLink to="/" className="button_navbar_company">portfolio</NavLink>
          </p>
        </div>

        <ul className="ul_mobile_navbar">
          {auth ? (
            <div className='div_list_mobile'>
              <li>
                <NavLink to="/" className='button_navbar_mobile'>Home</NavLink>
              </li>
              <li>
                <NavLink to="/projects" className='button_navbar_mobile'>Projetos</NavLink>
              </li>
              <li>
                <NavLink to="/about" className='button_navbar_mobile'>Sobre mim</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard" className='button_navbar_mobile'>Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/create" className='button_navbar_mobile'>Create</NavLink>
              </li>
              <li>
                <NavLink to="/update" className='button_navbar_mobile'>Update</NavLink>
              </li>
              <li>
                <span onClick={handleLogout} className='button_navbar_mobile'>Sair</span>
              </li>
            </div>
          ) : (
            <div className='div_list_mobile'>
              <li>
                <NavLink to="/" className='button_navbar_mobile'>Home</NavLink>
              </li>
              <li>
                <NavLink to="/projects" className='button_navbar_mobile'>Projetos</NavLink>
              </li>
              <li>
                <NavLink to="/about" className='button_navbar_mobile'>Sobre mim</NavLink>
              </li>
            </div>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
