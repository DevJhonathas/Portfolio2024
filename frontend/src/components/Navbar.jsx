import React from 'react'

//react router dom
import {Link} from "react-router-dom";

//hooks
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/projects">Projetos</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/about">About</Link>
      <Link to="/create">Create</Link>
      <Link to="/update">Update</Link>
    </div>
  )
}

export default Navbar
