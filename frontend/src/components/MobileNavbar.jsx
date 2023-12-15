//icons
import { IoIosHome } from "react-icons/io";
import { AiFillProject } from "react-icons/ai";
import { BsFillQuestionCircleFill  } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";

//react router dom
import {NavLink} from "react-router-dom";

//hooks
import { useDispatch } from 'react-redux';
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from 'react-router-dom';

// redux
import { logout, reset } from '../slices/authSlice';
import Navbar_mobile from './MobileNavbar';

//CSS
import "./Navbar.css";

const MobileNavbar = () => {
    const { auth } = useAuth();

    const navigate =  useNavigate();
    const dispath =  useDispatch();
  
    const handleLogout = () => {
      dispath(logout());
      dispath(reset());
  
      navigate("/");
    }
  return (
    <nav className="container_navbar"> 
      <div className="mobile_container">
        <div className='company_name_mobile'>
          <p>
            <NavLink to="/" className="button_navbar_company">portfolio</NavLink>
          </p>
        </div>
          
        <div className="burguer-button">
            <IoMenu/>
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
      </div>
    </nav>
  )
}

export default MobileNavbar