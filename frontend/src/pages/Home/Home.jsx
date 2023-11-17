import React from 'react';
//CSS
import "./Home.css";

//Images
import laptop from "../../images/svg/computador_com_codigo.webp";
import falling_books from "../../images/svg/livros_em_queda.webp";
import apple_with_books from "../../images/svg/livros_e_maca.webp";
import github from "../../images/svg/github.svg";
import instagram from "../../images/svg/instagram.svg";
import linkedin from "../../images/svg/linkedin.svg";

//Components
import Retangulo_msg from '../../components/Retangulo_msg';

const Home = () => {
  return (
    <div className='container_home'>
      <section className="section_hero">
        <img src={laptop} alt="laptop" className='img_laptop'/>
        <div className="title_and_icons">
          <h1>Olá, me chamo jhonathas</h1>
          <p>Full Stack Developer</p>
          <div className="icons">
            <ul>
              <li>
                <a href="https://www.instagram.com/jhonathas921/" target="_blank" rel='noreferrer'>
                  <img src={instagram} alt="instagram" className='icons_img'/>
                </a>
                </li>
              <li>
                <a href="https://www.linkedin.com/in/jhonathas-souza-33891b245/" target="_blank" rel='noreferrer'>
                  <img src={linkedin} alt="linkedin"  className='icons_img'/>
                </a>
              </li>
              <li>
                <a href="https://github.com/DevJhonathas" target="_blank" rel='noreferrer'>
                  <img src={github} alt="github"  className='icons_img'/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section_object">
        <h3>Objetivo</h3>
        <div>
          <Retangulo_msg 
          msg={"Almejo uma oportunidade de estágio como desenvolvedor Full stack para obter minha primeira experiência. Penso sempre em melhorar as minhas habilidades, consigo ter uma boa comunicação em equipe e sempre faço o meu melhor."} 
          type="button" 
          msg_button={"Sobre mim"} 
          rota={'/about'}/>
        </div>
      </section>

      <section className="section_school">
        <div className="school">
            <h3>Escolaridade</h3>
            <h2>Análise e Desenvolvimento de Sistemas</h2>
            <p>Universidade Vila Velha - 4° período.
            (Fevereiro de 2022) até (Fevereiro de 2024).</p>
        </div>
        <img src={falling_books} alt="falling_books" />
      </section>

      <section className="section_courses">
        <img src={apple_with_books} alt="apple_with_books" />
        <div className="courses">
            <h3>Cursos | idomas</h3>
            <ul className='courses_list'>
              <li><span>Full-stack</span> - Danki Code</li>
              <li><span>Web Designer</span> - Prepara cursos</li>
              <li><span>Programador</span> - Prepara Cursos</li>
              <li><span>React do zero</span> - Udemy</li>
              <li><span>Docker para desenvolvedores</span> - Udemy</li>
              <li><span>PHP do zero a maestria</span> - udemy</li>
            </ul>
            <ul className="language_list">
              <li>🇧🇷🇷PT-BR Falante nativo</li>
              <li>🇺🇸 EN Avançado</li>
            </ul>
        </div>
      </section>

      <section className="section_projects">
        <div>
          <Retangulo_msg 
          msg_title={"Está preparado?"} 
          msg={"Venha conhecer meus projetos"} 
          type="button" msg_button={"Projetos"} 
          rota={'/projects'}/>
        </div>
      </section>
    </div>
  )
}

export default Home 