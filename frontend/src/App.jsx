import "./global.css"

// Router Dom
import { Routes, Route, Navigate } from "react-router-dom"

//hooks
import { useAuth } from "./hooks/useAuth";

//Component
import Navbar from './components/Navbar';

//Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Dashboard from './pages/Auth/Dashboard/Dashboard';
import Create from './pages/Auth/Create/Create';
import Login from './pages/Auth/Login/Login';
import Update from './pages/Auth/Update/Update';
import ProjectsId from './pages/Projects/Projects_id/ProjectsId';
import Footer from "./components/Footer";

const App = () => {
  const {auth, loading} = useAuth();

  if(loading){
    return <p>Carregando...</p>
  }

  return (
    <div>
      <div className="container">
        <div className='circle_position_left circle_shape circle_blur'></div>
        <div className='circle_position_right circle_shape circle_blur'></div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:id' element={<ProjectsId />} />
          <Route path='/dashboard' element={auth ? <Dashboard /> : <Navigate to="/"/>} />
          <Route path='/create' element={auth ? <Create /> : <Navigate to="/"/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/update' element={auth ? <Update /> : <Navigate to="/"/>} />
        </Routes>
        </div>
      <Footer />
    </div>
    
  )
}

export default App