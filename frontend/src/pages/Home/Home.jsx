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
import brasil from "../../images/brasil.png";
import eua from "../../images/eua.png";

//Components
import MessageWithButton from '../../components/Messages/MessageWithButton';

const Home = () => {
  return (
    <div className='container_home'>
      <section className="section_hero_home">
        <div className='slideInRight'>
          <img src={laptop} alt="laptop" className='img_laptop'/>
        </div>
        <div className="text_about_me slideInLeft">
          <h1>Olá, Me chamo jhonathas</h1>
          <div className='p_about_me'>
            <p>Full Stack Developer</p>
          </div>
          <div className="icons_rede_social">
            <ul>
              <li>
                <a href="https://www.instagram.com/jhonathas921/" target="_blank" rel='noreferrer'>
                  <img src={instagram} alt="instagram" className='img_icons_rede_sociais'/>
                </a>
                </li>
              <li>
                <a href="https://www.linkedin.com/in/jhonathas-souza-33891b245/" target="_blank" rel='noreferrer'>
                  <img src={linkedin} alt="linkedin"  className='img_icons_rede_sociais'/>
                </a>
              </li>
              <li>
                <a href="https://github.com/DevJhonathas" target="_blank" rel='noreferrer'>
                  <img src={github} alt="github"  className='img_icons_rede_sociais'/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section_object">
        <div className='subtitle'>
          <h3>Objetivo</h3>
        </div>
        <div className='my_objective'>
          <MessageWithButton 
          msg={"Almejo uma oportunidade de estágio como desenvolvedor Full stack para obter minha primeira experiência. Penso sempre em melhorar as minhas habilidades, consigo ter uma boa comunicação em equipe e sempre faço o meu melhor."} 
          type="button" 
          msg_button={"Sobre mim"} 
          rota={'/about'}/>
        </div>
      </section>

      <section className="section_school">
        <div className="school">
          <div className="subtitle">
            <h3>Escolaridade</h3>
          </div>
            <h2>Análise e Desenvolvimento de Sistemas</h2>
            <p>Universidade Vila Velha - 5° período.
            (Fevereiro de 2022) até (Fevereiro de 2024).</p>
          </div>
        <div>
          <img src={falling_books} className='falling_books' alt="falling_books" />
        </div>
      </section>

      <section className="section_courses">
        <img src={apple_with_books} className='apple_with_books' alt="apple_with_books" />
        <div className="courses form_container">
            <ul className='courses_list'>
              <div className="subtitle">
                <h3>Cursos | idomas</h3>
              </div>
              <li><span>Full-stack</span> - Danki Code</li>
              <li><span>Web Designer</span> - Prepara cursos</li>
              <li><span>Programador</span> - Prepara Cursos</li>
              <li><span>React do zero</span> - Udemy</li>
              <li><span>Docker para desenvolvedores</span> - Udemy</li>
              <li><span>PHP do zero a maestria</span> - Udemy</li>
              <li><span>CSS - The Complete Guide 2023</span> - Udemy</li>
              <li><span>NodeJS - The Complete Guide</span> - Udemy</li>
              <li><span>Iniciando no desenvolvimento de API</span> - Udemy</li>
              <li><span>Curso completo de APIs com Nodejs</span> - Udemy</li>
            </ul>
            <ul className="language_list">
              <li><img src={brasil} className='bandeiras' alt="brasil" /> PT-BR Falante nativo</li>
              <li><img src={eua} className='bandeiras' alt="Eua" />  EN Avançado</li>
            </ul>
        </div>
      </section>

      <section className="section_projects">
        <div>
          <MessageWithButton 
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