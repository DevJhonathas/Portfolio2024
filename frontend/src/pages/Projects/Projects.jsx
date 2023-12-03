
// css
import "./Projects.css";

// images
import laptop_projetos from "../../images/svg/tl.webp"; 
import reactjs from "../../images/img_languages/reactjs.webp";
import css from "../../images/img_languages/css.webp";
import html from "../../images/img_languages/html.webp";
import nodejs from "../../images/img_languages/nodejs.webp";
import ts from "../../images/img_languages/Typescript.png";
import js from "../../images/img_languages/js.webp";
import java from "../../images/img_languages/java.png";
import firebase from "../../images/img_database/firebase.webp";
import mongodb from "../../images/img_database/mongodb.webp";
import postgresql from "../../images/img_database/postgresql.webp";
import sql_server from "../../images/img_database/sql_server.webp";

// Components
import MessageWithButton from '../../components/Messages/MessageWithButton';
import PostProjects from "../../components/PostProjects";

const Projects = () => {
  return (
    <div className="container_projects">
      <section className="section_hero_projects">
        <div className='text_about_me slideInRight'>
            <h1>Projetos</h1>
            <p>Descobrindo mais sobre minhas habilidades</p>
        </div>
        <div>
          <img src={laptop_projetos} alt="laptop" className='img_laptop_projetos slideInLeft'/>
        </div>
      </section>

      <section className="section_languages">
        <div className='subtitle'>
          <h3>Linguagens</h3>
        </div>
        <div className="img_languages">
          <ul>
            <li>
              <img src={reactjs} alt="Reactjs" />
              <p className="paragrahp_languages">React.js</p>
            </li>
            <li>
              <img src={html} alt="HTML" />
              <p className="paragrahp_languages">HTML</p>
            </li>
            <li>
              <img src={css} alt="CSS" />
              <p className="paragrahp_languages">CSS</p>
            </li>
            <li>
              <img src={js} alt="Javascript" />
              <p className="paragrahp_languages">Javascript</p>
            </li>
            <li>
              <img src={nodejs} alt="Nodejs" />
              <p className="paragrahp_languages">Node.js</p>
            </li>
            <li>
              <img src={java} alt="Java" />
              <p className="paragrahp_languages">Java</p>
            </li>
            <li>
              <img src={ts} alt="Typescript" />
              <p className="paragrahp_languages">Typescript</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section_database">
        <div className='subtitle'>
          <h3>Banco de dados</h3>
        </div>
        <div className="img_database">
          <ul>
            <li>
              <img src={postgresql} alt="PostgreSQL" />
              <p>PostgreSQL</p>
            </li>
            <li>
              <img src={firebase} alt="Firebase" />
              <p>Firebase</p>
            </li>
            <li>
              <img src={mongodb} alt="MongoDB" />
              <p>MongoDB</p>
            </li>
            <li>
              <img src={sql_server} alt="SQL Server" />
              <p>SQL Server</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section_project">
        <div className="text_projects">
          <p>vejas alguns dos meus</p>
          <span>Projetos</span>
        </div>
        <div>
          <PostProjects/>
        </div>
      </section>

      <section className="section_projects">
        <div>
          <MessageWithButton 
          msg_title={"Ei, tudo bem?"} 
          msg={"Venha me conhecer melhor"} 
          type="button" msg_button={"Sobre mim"} 
          rota={'/about'}/>
        </div>
      </section>
    </div>
  )
}

export default Projects