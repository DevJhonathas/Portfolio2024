import React from 'react';

// Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom"

//Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Dashboard from './pages/Auth/Dashboard/Dashboard';
import Create from './pages/Auth/Create/Create';
import Login from './pages/Auth/Login/Login';
import Update from './pages/Auth/Update/Update';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/create' element={<Create />} />
          <Route path='/login' element={<Login />} />
          <Route path='/update' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App