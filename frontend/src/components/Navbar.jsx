import React from 'react'

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
    <div>
      <ul>
        {auth ? (
          <>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projetos</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/create">Create</NavLink>
            </li>
            <li>
              <NavLink to="/update">Update</NavLink>
            </li>
            <li>
              <span onClick={handleLogout}>Sair</span>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projetos</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </>
        )}


      </ul>
      
    </div>
  )
}

export default Navbar
