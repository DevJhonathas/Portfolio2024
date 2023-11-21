// images
import laptop_projetos from "../../images/svg/tl.webp";

// css
import "./Projects.css";

const Projects = () => {
  return (
    <div className="container_projects">
      <section className="section_hero_projects">
        <div className='text_about_me'>
            <h1>Projetos</h1>
            <p>Descobrindo mais sobre minhas habilidades</p>
        </div>

        <div>
          <img src={laptop_projetos} alt="laptop" className='img_laptop_projetos'/>
        </div>
      </section>
    </div>
  )
}

export default Projects