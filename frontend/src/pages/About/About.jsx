import React from 'react';

// CSS
import "./About.css";

//Img
import balaoDuvida from "../../images/svg/chat_interrogacao.webp";
import falling_books from "../../images/svg/livros_em_queda.webp";
import apple_with_books from "../../images/svg/livros_e_maca.webp";
import github from "../../images/svg/github.svg";
import instagram from "../../images/svg/instagram.svg";
import linkedin from "../../images/svg/linkedin.svg";
import brasil from "../../images/brasil.png";
import eua from "../../images/eua.png";

//Components
import MessageText from '../../components/Messages/MessageText';
import MessageWithButton from '../../components/Messages/MessageWithButton';

const About = () => {
  return (
    <div className='container_about'>
      <section className="section_hero_about">
        <div className='text_about_me slideInRight'>
            <h1>Quem eu sou?</h1>
            <p>Olá, me chamo Jhonathas</p>
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
          <div>
            <img className="img_balao_duvida slideInLeft" src={balaoDuvida} alt="balão de duvida" />
          </div>
      </section>

      <section className='section_objetivo_about'>
        <div className='subtitle'>
          <h3>Objetivo</h3>
        </div>
        <div className='component_message_text'>
          <MessageText
            text_one={"Olá! Sou Jhonathas, um apaixonado por desenvolvimento Full-Stack, cursando Análise e Desenvolvimento de Sistemas na Universidade Vila Velha. Desde os 16 anos, venho explorando a programação e me especializei em desenvolvimento web, onde encontrei minha vocação."}
            text_two={"Atualmente no 5º período, concluí vários cursos na área e estou sempre em busca de aprimoramento. Estou animado para aplicar meu conhecimento e colaborar para o crescimento e inovação de uma empresa."}
            text_three={""}
          />
        </div>
      </section>

      <section className="section_school_about">
        <div className='subtitle school_text_about'>
            <h3>Escolaridade</h3>
            <h2>Análise e Desenvolvimento de Sistemas</h2>
            <p>Universidade Vila Velha - 5° período.
            (Fevereiro de 2022) até (Fevereiro de 2024).</p>
        </div>
        <div >
          <img src={falling_books} alt="falling_books" className="img_falling_books_about" />
        </div>
      </section>

      <section className="section_courses_about">
        <div>
          <img src={apple_with_books} className="img_books_and_apple" alt="apple_with_books" />
        </div>
        <div className="subtitle courses_text_about">
            <ul className='courses_list'>
              <div>
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
export default About