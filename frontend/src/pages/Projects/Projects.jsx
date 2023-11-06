import { useState,  useEffect } from "react";

const Projects = () => {
  const [projetos, setProjetos] = useState([]);
//testando se a api esta operando normalmente 
  useEffect(() => {
    fetch('http://localhost:5000/projects')
    .then(res => res.json())
    .then(data => {
      setProjetos(data);
    })
  }, [])

  return (
    <ul>
    {projetos.map(project => {
    return (
      <li key={project._id}>
      <h1>{project.title}</h1>
        <p>{project.description}</p>
        <p>{project.image}</p>
        <p>{project.language}</p>
      </li>
    )})}
  </ul>
  )
}

export default Projects