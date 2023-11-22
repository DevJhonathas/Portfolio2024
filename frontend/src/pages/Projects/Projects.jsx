
// css
import "./Projects.css";

// images
import laptop_projetos from "../../images/svg/tl.webp"; 
import reactjs from "../../images/languages/reactjs.png";
import css from "../../images/languages/css.png";
import html from "../../images/languages/html.png";
import nodejs from "../../images/languages/nodejs.png";
import js from "../../images/languages/js.png";
import firebase from "../../images/database/firebase.png";
import mongodb from "../../images/database/mongodb.png";
import postgresql from "../../images/database/postgresql.png";
import sql_server from "../../images/database/sql_server.png";

// Components
import MessageWithButton from '../../components/MessageWithButton';

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

      <section className="section_languages">
        <div className='subtitle'>
          <h3>Linguagens</h3>
        </div>
        <div className="img_languages">
          <ul>
            <li>
              <img src={reactjs} alt="Reactjs" />
              <p>React.js</p>
            </li>
            <li>
              <img src={html} alt="HTML" />
              <p>HTML</p>
            </li>
            <li>
              <img src={css} alt="CSS" />
              <p>CSS</p>
            </li>
            <li>
              <img src={js} alt="Javascript" />
              <p>Javascript</p>
            </li>
            <li>
              <img src={nodejs} alt="Nodejs" />
              <p>Node.js</p>
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