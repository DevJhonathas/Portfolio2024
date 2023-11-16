import React from 'react';
import "./global.css"

// Router Dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

//hooks
import { useAuth } from "./hooks/useAuth";

//Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Dashboard from './pages/Auth/Dashboard/Dashboard';
import Create from './pages/Auth/Create/Create';
import Login from './pages/Auth/Login/Login';
import Update from './pages/Auth/Update/Update';
import Navbar from './components/Navbar';

const App = () => {
  const {auth, loading} = useAuth();

  if(loading){
    return <p>Carregando...</p>
  }

  return (
    <div className='container'>
        <div className='circle_position_right circle_shape circle_blur'></div>
        <div className='circle_position_left circle_shape circle_blur'></div>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/dashboard' element={auth ? <Dashboard /> : <Navigate to="/"/>} />
          <Route path='/create' element={auth ? <Create /> : <Navigate to="/"/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/update' element={auth ? <Update /> : <Navigate to="/"/>} />
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App